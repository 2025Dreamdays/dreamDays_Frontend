const button = document.querySelector(".sus")

const warning = document.querySelector('.warningName');

document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");
    const infoForm = document.getElementById("infoForm");
    const bottomSection = document.getElementById("bottomSection");
    const btn = document.getElementById("suss");
    const line = document.getElementById("pt-line");
    registerBtn.addEventListener("click", function () {
        infoForm.style.display = "block"; // 입력 폼 보이기
        bottomSection.style.display = "block"; // 하단 섹션 보이기
        btn.style.display = "block";
        line.style.display = "block";
        registerBtn.style.display = "none"; // 버튼 숨기기
    });
});

const modal = document.getElementById("modal");
const modalOpenBtn = document.querySelector(".add"); 
const modalCloseBtn = document.querySelector(".close");


modalOpenBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// 모달 닫기 (X 버튼 클릭 시)
modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("dp_major").addEventListener("change", function() {
    if(this.value === "") {
        this.style.color = "#BBBBBB";
    } else {
        this.style.color = "white";
    }
});
document.getElementById("dp_mbti").addEventListener("change", function() {
    if(this.value === "") {
        this.style.color = "#BBBBBB";
    } else {
        this.style.color = "white";
    }
});


function inputValue() {
    const nameValue = document.getElementById('id_name').value;
    const studentNumberValue = document.getElementById('ip_student').value;
    const idvalue = document.getElementById('ip_instaid').value;
    const ipage = document.getElementById('ip_age').value;
    const manck = document.getElementById('men_ck').value;
    const womenck = document.getElementById('women_ck').value;
    const major = document.getElementById('dp_major').value;
    const mbti = document.getElementById('dp_mbti').value;
    const oneline = document.getElementById('ip_line').value;
    const genderckme = document.getElementById('aa').value
    const genderckwo = document.getElementById('bb').value;
   
    if(nameValue === "" || studentNumberValue === "" || idvalue === "" ||
        ipage === "" || (manck.checked === false && womenck.checked === false) || major === "" ||
        mbti === "" || oneline === "" || (genderckme.checked === false && genderckwo.checked === false)
    ) {
        if(nameValue === "") {
            
        }
    }

    if (nameValue === "" || studentNumberValue === "") {
        if (nameValue === "" && studentNumberValue === "") {
            warningName.classList.add('warning');
            warningNumber.classList.add('warning');
        } else if (nameValue === "") {
            warningName.classList.add('warning');
        } else {
            warningNumber.classList.add('warning');
        }

        return false
    } else {
        return true
    }
}


document.getElementById('suss').addEventListener('click', function() {
    window.location.href="index.html";
})