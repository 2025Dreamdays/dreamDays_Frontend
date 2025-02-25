// 예시: API에서 사용자 정보를 가져오는 함수
async function getUserInfo() {
    try {
        const response = await axios.get('https://likelion.hellofriend.cc/api/users/check-info', {
            withCredentials: true,  // 쿠키 포함 필요 시
        });

        if (response.status === 200) {
            // 데이터를 반환하는 부분
            return response.data;  // 예: { name: "홍길동", studentNumber: "2023001" }
        } else {
            console.error("API 요청 실패", response);
            return null;
        }
    } catch (error) {
        console.error("서버와 통신 실패", error);
        return null;
    }
}

// 페이지 로드 후 데이터 처리
window.onload = async function () {
    const userInfo = await getUserInfo();  // api_view.js의 getUserInfo 함수 호출

    if (userInfo) {
        // 백엔드에서 가져온 데이터를 HTML 요소에 삽입
        document.getElementById('re_name').textContent = userInfo.name || "데이터 없음";  // name
        document.getElementById('re_studentNumber').textContent = userInfo.studentNumber || "데이터 없음";  // studentNumber
    } else {
        // 데이터가 없을 경우 처리
        document.getElementById('re_name').textContent = "정보를 가져올 수 없습니다";
        document.getElementById('re_studentNumber').textContent = "정보를 가져올 수 없습니다";
    }
};
