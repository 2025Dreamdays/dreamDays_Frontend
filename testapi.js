document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // 기본 제출 방지

            const name = document.getElementById("name").value;
            const studentNumber = document.getElementById("studentNumber").value;

            if (!name || !studentNumber) {
                alert("이름과 학번을 입력해주세요.");
                return;
            }

            axios.get("https://eulji-hf.netlify.app/api/users/check-info", {
                params: {
                    name: name,
                    studentNumber: studentNumber
                }
            }).then(response => {
                if (response.data) {
                    localStorage.setItem("studentInfo", JSON.stringify(response.data));
                    window.location.href = "viewInfo.html";
                } else {
                    alert("등록된 정보가 없습니다.");
                }
            }).catch(error => {
                console.error("Error fetching student info:", error);
                alert("오류가 발생했습니다. 다시 시도해주세요.");
            });
        });
    }

    // viewInfo.html에서 실행되는 코드
    if (window.location.pathname.includes("viewInfo.html")) {
        const studentInfo = JSON.parse(localStorage.getItem("studentInfo"));
        console.log(studentInfo);

        if (studentInfo) {
            document.getElementById("re_name").textContent = studentInfo.name;
            document.getElementById("re_studentNumber").textContent = studentInfo.studentNumber;
            console.log("데이터 정상 출력됨!");
        } else {
            console.log("학생 정보 없음!");
            window.location.href = "index.html";
        }
    }
});
