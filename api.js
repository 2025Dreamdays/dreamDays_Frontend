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
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('등록에 실패하였습니다. 다시 시도해주세요.');
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
          warning.classList.add('war');
      } else if(studentNumberValue === "") {
          warning.classList.add('war');
      } else if(idvalue === "") {
          warning.classList.add('war');
      } else if(ipage === "") {
          warning.classList.add('war');
      } else if((manck.checked === false && womenck.checked)) {
          warning.classList.add('war');
      } else if(major === "") {
          warning.classList.add('war');
      } else if(mbti === "") {
          warning.classList.add('war');
      } else if(oneline === "") {
          warning.classList.add('war');
      } else if((genderckme.checked === false && genderckwo.checked === false)) {
          warning.classList.add('war');
      } else {
          warning.classList.add('war');
      }
      return false
  } else {
      return true
  }
}

function lego() {
  if(inputValues()) {
      window.location.href ="index.html";
  }else{

  }
}

document.getElementById('suss').addEventListener('click', function() {
  inputValues();
  lego();
})
