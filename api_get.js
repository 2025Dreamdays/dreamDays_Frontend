// 폼 제출 이벤트 핸들러
document.getElementById("form").addEventListener("submit", async function(event) {
    event.preventDefault();  // 기본 폼 제출 방지

    // 입력값 가져오기
    const name = document.getElementById("name").value.trim();
    const studentNumber = document.getElementById("studentNumber").value.trim();

    // 입력값 검증
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
        // 가져온 정보를 HTML 요소에 삽입
        document.getElementById("re_name").textContent = userInfo.name || "정보 없음";
        document.getElementById("re_studentNumber").textContent = userInfo.studentNumber || "정보 없음";

        // 화면 전환 (checkPage 숨기고 drawPage 보이기)
        document.querySelector(".checkPage").classList.add("none");
        document.querySelector(".drawPage").classList.remove("none");
    } else {
        alert("사용자 정보를 찾을 수 없습니다 ❌");
    }
});
