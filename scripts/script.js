const openSettingsWindow = document.getElementById("settingsGear");
const icon = document.getElementById("icon");
const settingsWindow = document.getElementById("settingsWindow");


function toggleIsActiveClass(){
    icon.classList.replace("fa-gear", "fa-xmark");
    settingsWindow.classList.toggle("isActive");

    if(settingsWindow.classList.contains("isActive") === false){
        icon.classList.replace("fa-xmark", "fa-gear");
    };
};

openSettingsWindow.addEventListener('click', toggleIsActiveClass);




const settingsForm = document.getElementById("settingsForm");
const submitButton = document.getElementById("submitButton");
function buttonAnimate(){
    submitButton.style.border = "none";
    submitButton.style.transform = "translate(5, 5)";
    settingsWindow.classList.remove("isActive");
    icon.classList.replace("fa-xmark", "fa-gear");
}

submitButton.addEventListener('click', buttonAnimate);

settingsForm.addEventListener("submit", function(event){
    event.preventDefault();
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        // console.log(input.name, input.value);
        if(input.name === "numberOfPomodoro") document.getElementById("pomodoro--total").textContent = input.value;
        if(input.name === "pomodoroMinutes") document.getElementById("counter--minutes").textContent = input.value;
        if(input.name === "breakTime") document.getElementById("break--minutes").textContent = input.value;
    });
})