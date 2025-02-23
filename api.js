

document.getElementById("suss").addEventListener("click", async function () {
    const data = {
        name: document.getElementById("ip_name").value,
        studentNumber : document.querySelector(".ip_st").value,
        instagramId: document.querySelector(".ip_id").value,
        age: document.getElementById("ip_age").value,
        gender: document.getElementById("men_ck").checked ? "남성" : document.getElementById("women_ck").checked ? "여성" : "",
        department: document.getElementById("dp_major").value,
        mbti: document.getElementById("dp_mbti").value,
        selectGender: document.getElementById("aa").checked ? "남성" : document.getElementById("bb").checked ? "여성" : "",
        bio: document.querySelector(".ip_liner").value,
    };

    try {
        const response = await axios.post('http://likelion.hellofriend.cc/api/users/create-info', data, {
    withCredentials: true, 
    headers: {
        'Content-Type': 'application/json'
    }
});  

        if (response.status === 200) {
            alert("백엔드 연동 성공! 서버에서 응답 받음 ✅");
            console.log("서버 응답:", response.data);
        } else {
            alert("백엔드 연동 실패 ❌");
            console.error("서버 응답 오류:", response);
        }
    } catch (error) {
        alert("연결 오류 ❌ 서버와 통신할 수 없습니다.");
        console.error("Axios 요청 오류:", error);
    }
});
