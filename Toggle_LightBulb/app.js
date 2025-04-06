const toggleBtn = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
const statusText = document.getElementById("status");
const body = document.getElementById("body");
toggleBtn.addEventListener("click", function(){
    if (bulb.classList.contains("off")){
        bulb.classList.remove("off");   
        statusText.innerText = "Status: On";
        toggleBtn.innerText = "Turn Off";
        body.classList.add("dark-mode");
    }
    else{
        bulb.classList.add("off");
        statusText.innerText = "Status: Off";
        toggleBtn.innerText = "Turn On";
        body.classList.remove("dark-mode");
    }
});