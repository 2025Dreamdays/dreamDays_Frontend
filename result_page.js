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
