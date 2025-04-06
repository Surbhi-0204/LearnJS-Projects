const text = document.getElementById("mainHeading");

const redBtn = document.getElementById("redButton");
const greenBtn = document.getElementById("greenButton");
const blueBtn = document.getElementById("blueButton");
const purpleBtn = document.getElementById("purpleButton");
const resetBtn = document.getElementById("resetButton");

redBtn.addEventListener("click", ()=>{
    text.style.color="#e74c3c"
})
greenBtn.addEventListener("click", ()=>{
    text.style.color="#2ecc71"
})
blueBtn.addEventListener("click", ()=>{
    text.style.color="#3498db"
})
purpleBtn.addEventListener("click", ()=>{
    text.style.color="#9b59b6"
})
resetBtn.addEventListener("click", ()=>{
    text.style.color="#34495e"
})