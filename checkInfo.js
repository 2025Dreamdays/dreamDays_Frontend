const warningNumber = document.querySelector('.warningNumber');
const warningName = document.querySelector('.warningName');

function inputValue() {
    const nameValue = document.getElementById('name').value;
    const studentNumberValue = document.getElementById('studentNumber').value;
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

function inputSense(e) {
    if (e.target.value) {
        console.log(e.target);
    }
}

