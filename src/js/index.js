const selectMainStay = document.querySelector('.main-stay');
const selectMainThanks = document.querySelector('.main-thanks');
const selectInputEmail = document.getElementById('input-email');
const selectDivLabel = document.querySelector('.div-label');
const selectLabel = document.querySelector('.label-input');
const selectFormStay = document.getElementById('form-stay');
const selectBtnThanks = document.querySelector('.btn-thanks');

selectInputEmail.addEventListener("focusin", backgroundImgSignAdd);
selectInputEmail.addEventListener("focusout", backgroundImgSignRemove);

document.getElementById("btn-stay").addEventListener("click", () => {
    const checkdEmail = selectInputEmail.value;
    const insertPText = '<p class="error-message">Valid email requered</p>';

    if (validateEmail(checkdEmail) === true) {
        selectMainStay.style.display = "none";
        selectMainThanks.style.display = "flex";
    } else {
        removeTagP();
        selectInputEmail.classList.add("error");
        selectDivLabel.insertAdjacentHTML("beforeend", insertPText);
    };
});

selectFormStay.addEventListener("submit", (eventSub) => {
    eventSub.preventDefault();
});

selectBtnThanks.addEventListener("click", btnOk);

function backgroundImgSignAdd() {
    document.querySelector('.img-sign').style.background = "var(--Tomato)";
};

function backgroundImgSignRemove() {
    document.querySelector('.img-sign').style.background = ""
};

function removeTagP() {
    const classError = selectInputEmail.classList.value;

    if (classError.includes("error")){
        selectInputEmail.classList.remove("error");
        selectLabel.nextElementSibling.remove("error-message");
    } else {
        return;
    };
};

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

function btnOk() {
    document.location.reload(true);
};