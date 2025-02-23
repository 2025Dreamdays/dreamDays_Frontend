

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
    axios.post("https://likelion.hellofriend.cc/api/users/create-info", data, {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    } // CORS에서 쿠키를 보내려면 필수
})
.then(response => {
    console.log("응답:", response);
})
.catch(error => {
    console.error("에러 발생:", error);
});

});


