document.addEventListener("DOMContentLoaded", function() {
    // API 호출
    axios.get('https://eulji-hf.netlify.app/api/users/check-info')
        .then(function(response) {
            // 성공적으로 데이터를 가져온 경우
            const data = response.data;
            document.getElementById('re_name').innerText = data.name; // 이름 출력
            document.getElementById('re_studentNumber').innerText = data.studentNumber; // 학번 출력
        })
        .catch(function(error) {
            console.error("데이터를 가져오는 데 실패했습니다:", error);
            // 오류 처리 (예: 사용자에게 오류 메시지 표시)
        });
});
