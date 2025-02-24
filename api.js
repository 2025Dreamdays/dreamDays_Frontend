document.getElementById('registerBtn').addEventListener('click', function() {
  document.getElementById('infoForm').style.display = 'block';
  document.getElementById('pt-line').style.display = 'block';
  document.getElementById('bottomSection').style.display = 'block';
  document.getElementById('suss').style.display = 'block';
});

document.getElementById('suss').addEventListener('click', async function(event) {
  event.preventDefault();

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
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      console.log('Success:', response.data);
      alert('등록이 완료되었습니다!');
      window.location.href = "index.html";
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





function inputValues() {
    let isValid = true; // 유효성 검사 결과 저장

    function showWarning(element) {
        const warning = element.nextElementSibling;
        if (warning && warning.classList.contains("waring")) {
            warning.style.display = "block"; // 경고 메시지 표시
        }
        isValid = false;
    }

    function hideWarning(element) {
        const warning = element.nextElementSibling;
        if (warning && warning.classList.contains("waring")) {
            warning.style.display = "none"; // 경고 메시지 숨김
        }
    }

    const nameValue = document.getElementById('ip_name');
    const studentNumberValue = document.getElementById('ip_student');
    const idValue = document.getElementById('ip_instaid');
    const ageValue = document.getElementById('ip_age');
    const manCk = document.getElementById('men_ck');
    const womenCk = document.getElementById('women_ck');
    const major = document.getElementById('dp_major');
    const mbti = document.getElementById('dp_mbti');
    const oneline = document.getElementById('ip_line');
    const genderMe = document.getElementById('aa');
    const genderWo = document.getElementById('bb');

    if (nameValue.value.trim() === "") {
        showWarning(nameValue);
    } else {
        hideWarning(nameValue);
    }

    if (studentNumberValue.value.trim() === "") {
        showWarning(studentNumberValue);
    } else {
        hideWarning(studentNumberValue);
    }

    if (idValue.value.trim() === "") {
        showWarning(idValue);
    } else {
        hideWarning(idValue);
    }

    if (ageValue.value.trim() === "") {
        showWarning(ageValue);
    } else {
        hideWarning(ageValue);
    }

    if (!manCk.checked && !womenCk.checked) {
        showWarning(manCk.parentElement);
    } else {
        hideWarning(manCk.parentElement);
    }

    if (major.value === "") {
        showWarning(major);
    } else {
        hideWarning(major);
    }

    if (mbti.value === "") {
        showWarning(mbti);
    } else {
        hideWarning(mbti);
    }

    if (oneline.value.trim() === "") {
        showWarning(oneline);
    } else {
        hideWarning(oneline);
    }

    if (!genderMe.checked && !genderWo.checked) {
        showWarning(genderMe.parentElement);
    } else {
        hideWarning(genderMe.parentElement);
    }

    return isValid;
}


document.querySelectorAll("input, select").forEach((element) => {
    element.addEventListener("input", function () {
        const warning = this.nextElementSibling;
        if (warning && warning.classList.contains("waring")) {
            warning.style.display = "none"; // 입력하면 경고 메시지 사라짐
        }
    });
});

