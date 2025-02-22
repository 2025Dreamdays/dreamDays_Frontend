document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded 실행됨!");

    // 📌 checkInfo.html에서 실행되는 코드 (form 제출 시 서버 요청)
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // 기본 제출 방지

            const name = document.getElementById("name").value.trim();
            const studentNumber = document.getElementById("studentNumber").value.trim();

            if (!name || !studentNumber) {
                alert("이름과 학번을 입력해주세요.");
                return;
            }

            axios.get("https://eulji-hf.netlify.app/api/users/check-info", {
                params: { name, studentNumber }
            }).then(response => {
                if (response.data) {
                    localStorage.setItem("studentInfo", JSON.stringify(response.data));
                    window.location.href = "viewInfo.html";
                } else {
                    alert("등록된 정보가 없습니다.");
                }
            }).catch(error => {
                console.error("Error fetching student info:", error);
                alert("서버와 연결할 수 없습니다. 네트워크 상태를 확인하세요.");
            });
        });
    }

    // 📌 viewInfo.html에서 실행되는 코드 (저장된 정보 표시)
    if (window.location.href.includes("viewInfo.html")) {
        console.log("viewInfo.html 로드됨");
        const studentInfo = JSON.parse(localStorage.getItem("studentInfo"));
        console.log("studentInfo 데이터:", studentInfo);

        if (studentInfo) {
            document.getElementById("re_name").textContent = studentInfo.name;
            document.getElementById("re_studentNumber").textContent = studentInfo.studentNumber;
            console.log("데이터 정상 출력됨!");
        } else {
            console.warn("학생 정보 없음! index.html로 이동");
            alert("학생 정보를 찾을 수 없습니다.");
            window.location.href = "index.html";
        }
    }
});
