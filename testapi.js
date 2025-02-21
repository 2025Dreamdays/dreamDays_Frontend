document.addEventListener("DOMContentLoaded", async function() {

    try {
        const response = await axios.get("https://eulji-hf.netlify.app/api/users/check-info", data);  // HTTPS로 요청

        const student = response.data;
        
        // 받아온 데이터로 HTML 요소에 정보 채우기
        document.getElementById("re_name").textContent = student.name;
        document.getElementById("re_studentNumber").textContent = student.studentNumber;

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
