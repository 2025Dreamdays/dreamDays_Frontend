axios.post("https://likelion.hellofriend.cc/api/users/create-info", data, {
    withCredentials: true // CORS에서 쿠키를 보내려면 필수
})
.then(response => {
    console.log("응답:", response);
})
.catch(error => {
    console.error("에러 발생:", error);
});