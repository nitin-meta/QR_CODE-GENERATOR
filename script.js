const wrapper = document.querySelector('.wrapper');
const formInput = wrapper.querySelector('.form input');
const generateBtn = wrapper.querySelector('.form button');
const qrImg = wrapper.querySelector('.qr-code img');
let preValue;

generateBtn.addEventListener('click', () => {
    let qrValue = formInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

formInput.addEventListener('keyup', () => {
    if (!formInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});