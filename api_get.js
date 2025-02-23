// 사용자 정보를 백엔드에서 가져오는 함수
async function fetchUserInfo(name, studentNumber) {
    try {
        const response = await axios.get('https://likelion.hellofriend.cc/api/users/check-info', {
            params: {
                name: name,
                studentNumber: studentNumber
                },
            withCredentials: true,  // 필요 시 쿠키 포함
        });

        if (response.status === 200) {
            return response.data;  // 서버에서 받은 사용자 정보 반환
        } else {
            console.error("서버 응답 오류 ❌", response);
            return null;
        }
    } catch (error) {
        console.error("백엔드 요청 실패 ❌", error);
        return null;
    }
}

// 폼 제출 이벤트 리스너
document.getElementById("form").addEventListener("submit", async function(event) {
    event.preventDefault();  // 기본 폼 제출 방지

    // 입력값 가져오기
    const name = document.getElementById("name").value.trim();
    const studentNumber = document.getElementById("studentNumber").value.trim();

    // 입력값 검증 (필수 입력)
    if (!name) {
        document.querySelector(".warningName").style.display = "block";
        return;
    } else {
        document.querySelector(".warningName").style.display = "none";
    }

    if (!studentNumber) {
        document.querySelector(".warningNumber").style.display = "block";
        return;
    } else {
        document.querySelector(".warningNumber").style.display = "none";
    }

    // 백엔드에서 사용자 정보 가져오기
    const userInfo = await fetchUserInfo(name, studentNumber);

    if (userInfo) {
        // 사용자 정보가 있으면 화면에 표시
        document.getElementById("re_name").textContent = userInfo.name || "정보 없음";
        document.getElementById("re_studentNumber").textContent = userInfo.studentNumber || "정보 없음";
        
        // 입력 페이지 숨기고 결과 페이지 보이기
        document.querySelector(".checkPage").classList.add("none");
        document.querySelector(".drawPage").classList.remove("none");2
    } else {
        alert("사용자 정보를 찾을 수 없습니다 ❌");
    }
});

document.getElementById('friendsButton').addEventListener('click', function() {
    window.location.href= `loading.html?name=${params.name}&studentNumber=${params.studentNumber}`
})
