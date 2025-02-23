async function drawUser() {
    const urlParams = new URLSearchParams(window.location.search);
    const studentNumber = urlParams.get('studentNumber');
    const name = urlParams.get('name');
    const requestData = {
        name: `${name}`,
        studentNumber: `${studentNumber}`
    };

    try {
        const response = await fetch("https://likelion.hellofriend.cc/api/draw", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("뽑힌 사용자 정보:", data);

        // 뽑힌 사용자 정보 추출
        const drawnUser = data;  // 백엔드에서 보내주는 사용자 정보 그대로 받기

        // 쿼리 파라미터로 데이터를 넘기기
        window.location.href = `result_page.html?name=${drawnUser.name}&age=${drawnUser.age}&instagramId=${drawnUser.instagramId}&department=${drawnUser.department}&gender=${drawnUser.gender}&mbti=${drawnUser.mbti}&bio=${drawnUser.bio}`;        
    } catch (error) {
        console.error("뽑기 실패:", error);
    }
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const age = urlParams.get('age');
    const instagramId = urlParams.get('instagramId');
    const department = urlParams.get('department');
    const gender = urlParams.get('gender');
    const mbti = urlParams.get('mbti');
    const bio = urlParams.get('bio');

    // 값들을 화면에 표시
    document.getElementById("name").textContent = `${name}`;
    document.getElementById("age").textContent = `${age}`;
    document.getElementById("instagramId").textContent = `${instagramId}`;
    document.getElementById("department").textContent = `${department}`;
    document.getElementById("gender").textContent = `${gender}`;
    document.getElementById("mbti").textContent = `${mbti}`;
    document.getElementById("bio").textContent = `${bio}`;
}
