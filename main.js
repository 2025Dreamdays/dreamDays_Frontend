const registerInfo = document.querySelector('.registerInfo');
const checkInfo = document.querySelector('.checkInfo');
const orangeDisplay = document.querySelector('.orangeDisplay');
const blackDisplay = document.querySelector('.blackDisplay');
const orange = document.querySelector('.orange');
const black = document.querySelector('.black');
const likelion = document.querySelector('.likelion');
const body = document.querySelector('body');


//화면 넘김 모션
const clickCheck = () => {
    orangeDisplay.classList.add('none');
    blackDisplay.classList.add('none');
    orange.classList.add('maxWidth');
    black.classList.add('minWidth');
    likelion.classList.add('none')
}
const clickRegister = () => {
    orangeDisplay.classList.add('none');
    blackDisplay.classList.add('none');
    orange.classList.add('minWidth');
    black.classList.add('maxWidth');
    likelion.classList.add('none')
}
checkInfo.addEventListener('click', clickCheck);
registerInfo.addEventListener('click', clickRegister);


//사전등록 확인 버튼 비활성화 코드
let now = new Date();

let dreamD = new Date("2025-02-21");

console.log(now < dreamD);
if (now < dreamD) {
    checkInfo.disabled = true;
}


//입력한 정보 확인 페이지 이동
const checkOrangeDisplayLink = () => {
    setTimeout(() => {
        window.location.href = "checkInfo.html"
    }, 1100)
}
checkInfo.addEventListener('click', checkOrangeDisplayLink);



const checkBlackDisplayLink = () => {
    setTimeout(() => {
        window.location.href = "information.html"
    }, 1100)
}
registerInfo.addEventListener('click', checkBlackDisplayLink);