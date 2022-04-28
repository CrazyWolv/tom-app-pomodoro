// TIME & NUMBER OF POMODORO SETTINGS WINDOW
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





// FORM AND SUBMIT (CHANGING VALUES TIME + NUMBER)
const settingsForm = document.getElementById("settingsForm");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");
function buttonAnimate(){
    submitButton.style.border = "none";
    submitButton.style.transform = "translate(5, 5)";
}

submitButton.addEventListener('click', buttonAnimate);

settingsForm.addEventListener("submit", function(event){
    event.preventDefault();
    const inputPomodoro = document.querySelector("#numberOfPomodoro");
    const PomodoroTime = document.querySelector("#pomodoroMinutes");
    const breakTime = document.querySelector("#breakTime");
    try{
        try{
            if(inputPomodoro.value <= 0 || PomodoroTime.value <= 0 || breakTime.value <= 0) throw new Error("Vous ne pouvez pas entrer de valeur négative ou égale à 0.");
            if(inputPomodoro.value > 5) throw new Error("Vous ne pouvez pas faire plus de 5 Pomodoro");
            if(PomodoroTime.value > 60 || breakTime.value > 60) throw new Error("Vous ne pouvez pas faire un Pomodoro ou une pause de plus d'1h");

            document.querySelector("#pomodoro--total").textContent = inputPomodoro.value;
            document.querySelector("#counter--minutes").textContent = PomodoroTime.value;
            document.querySelector("#break--minutes").textContent = breakTime.value;
        }catch(error){
            console.error("Erreur :", error.message);
            throw error;
        }finally{
            console.log("Finally");
        }
        errorMessage.classList.remove("isShown");
        settingsWindow.classList.remove("isActive");
        icon.classList.replace("fa-xmark", "fa-gear");
    }catch(error){
        // console.log("Erreur :", error);
        if(errorMessage.classList.contains("isShown") === false){
            errorMessage.classList.add("isShown");
        };
        errorMessage.textContent = error.message;
    }
})



// RUNNING TIME & PAUSE IT AT NEED + CHANGING CURRENT POMODORO
const currentPomodoro = parseInt(document.getElementById("pomodoro--current").textContent);