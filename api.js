document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input, select");
    
    // 🚨 모든 입력 필드를 감시하고, 입력 시 경고 메시지 제거
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            validateField(input);
        });
    });

    function validateField(input) {
        const warning = input.nextElementSibling;
        if (warning && warning.classList.contains("waring")) {
            if (input.type === "checkbox") {
                // 체크박스는 개별적으로 처리
                const parent = input.closest(".ip_ct");
                if (parent && parent.querySelector("input:checked")) {
                    warning.style.display = "none"; // 체크되면 경고 숨김
                } else {
                    warning.style.display = "block"; // 체크 안되면 경고 표시
                }
            } else {
                if (input.value.trim() === "" || input.value === null) {
                    warning.style.display = "block"; // 비어 있으면 경고 표시
                } else {
                    warning.style.display = "none"; // 입력하면 경고 숨김
                }
            }
        }
    }

    function validateForm() {
        let isValid = true;
        inputs.forEach(input => {
            validateField(input);
            if ((input.type !== "checkbox" && input.value.trim() === "") ||
                (input.type === "checkbox" && !document.querySelector(`input[name="${input.name}"]:checked`))) {
                isValid = false;
            }
        });
        return isValid;
    }

    // 🚨 페이지 로드 후 빈 필드가 있으면 자동으로 경고 표시
    setTimeout(() => {
        inputs.forEach(input => validateField(input));
    }, 500);

    // ✅ "등록 완료하기" 버튼 클릭 시 전체 검증
    document.getElementById("suss").addEventListener("click", async function (event) {
        event.preventDefault(); // 기본 제출 동작 방지
        
        const isValid = validateForm(); // 모든 입력 필드 검증 실행

        if (!isValid) {
            // ⚠️ 입력이 누락된 경우: alert()을 마지막에 실행하여 경고문을 먼저 표시
            setTimeout(() => {
                alert("모든 필드를 입력해야 합니다!");
            }, 100);
            return; // 입력이 누락되었으면 더 이상 진행하지 않음
        }

        // ✅ 모든 입력이 완료된 경우 서버로 데이터 전송
        const data = {
            name: document.getElementById('ip_name').value, 
            studentNumber: document.querySelector('input[name="studentNumber"]').value,
            instagramId: document.querySelector('input[name="instagramId"]').value,
            age: document.getElementById('ip_age').value,
            gender: document.getElementById("men_ck").checked ? "남성" : document.getElementById("women_ck").checked ? "여성" : "",
            department: document.getElementById('dp_major').value,
            mbti: document.getElementById('dp_mbti').value,
            selectGender: document.getElementById("aa").checked ? "남성" : document.getElementById("bb").checked ? "여성" : "",
            bio: document.getElementById('ip_line').value
        };

        try {
            const response = await axios.post('https://likelion.hellofriend.cc/api/users/create-info', data, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.status === 200) {
                alert('등록이 완료되었습니다!');
                window.location.href = "index.html"; // 성공 시 페이지 이동
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    alert("형식이 올바르지 않습니다.");
                } else if (error.response.status === 500) {
                    alert("이미 등록된 사용자입니다.");
                } else {
                    alert("알 수 없는 오류가 발생했습니다.");
                }
            } else {
                alert("서버에 연결할 수 없습니다. 네트워크를 확인해주세요.");
            }
        }
    });

    // 모달창 관련 코드
    const modal = document.getElementById("modal");
    const modalOpenBtn = document.querySelector(".add"); 
    const modalCloseBtn = document.querySelector(".close");

    modalOpenBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    modalCloseBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // 드롭다운 색상 변경 (선택하지 않았을 때 회색, 선택했을 때 흰색)
    document.getElementById("dp_major").addEventListener("change", function() {
        this.style.color = this.value === "" ? "#BBBBBB" : "white";
    });

    document.getElementById("dp_mbti").addEventListener("change", function() {
        this.style.color = this.value === "" ? "#BBBBBB" : "white";
    });
});
