const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const jobInput = document.getElementById("jobInput");
const bioInput = document.getElementById("bioInput");

const displayName = document.getElementById("nameDisplay");
const displayAge = document.getElementById("ageDisplay");
const displayJob = document.getElementById("jobDisplay");
const displayBio = document.getElementById("bioDisplay");

nameInput.addEventListener("input", ()=>{
    displayName.textContent = nameInput.value
})

ageInput.addEventListener("input", ()=>{
    displayAge.textContent = ageInput.value
})

jobInput.addEventListener("input", ()=>{
    displayJob.textContent = jobInput.value
})

bioInput.addEventListener("input", ()=>{
    displayBio.textContent = bioInput.value
})