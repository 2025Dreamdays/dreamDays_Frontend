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
