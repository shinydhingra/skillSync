window.onload = function(){

let streak = localStorage.getItem("streak") || 0;
streak = parseInt(streak);

// Show streak
document.getElementById("streakDisplay").innerText =
"🔥 Current Streak: " + streak + " Days";

// Load saved data
let savedSkill = localStorage.getItem("skill");
let savedGoal = localStorage.getItem("goal");

if(savedSkill){
document.getElementById("skillDisplay").innerText = "Skill: " + savedSkill;
}

if(savedGoal){
document.getElementById("goalDisplay").innerText = "Daily Goal: " + savedGoal;
}

// 🔥 Progress function
function updateProgress(){
    let progress = streak * 10;
    if(progress > 100) progress = 100;

    document.getElementById("progressBar").value = progress;
    document.getElementById("progressText").innerText = progress + "%";
}

// 🔥 Motivational Popup
function showPopup(message){
    document.getElementById("popupText").innerText = message;
    document.getElementById("popup").style.display = "block";
}

window.closePopup = function(){
    document.getElementById("popup").style.display = "none";
}

// 🔥 Random Message Generator
function getMessage(){
    let messages = [
        "🔥 Great job! Keep going!",
        "💪 Consistency is the key!",
        "🚀 You are improving daily!",
        "👏 Proud of you!",
        "🌟 Stay focused!"
    ];

    let randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// ➕ Add Skill
window.addSkill = function(){

    let skill = document.getElementById("skillInput").value;
    let goal = document.getElementById("goalInput").value;

    // Reset streak when new skill added
    streak = 0;
    localStorage.setItem("streak", streak);

    document.getElementById("skillDisplay").innerText = "Skill: " + skill;
    document.getElementById("goalDisplay").innerText = "Daily Goal: " + goal;
    document.getElementById("streakDisplay").innerText =
    "🔥 Current Streak: 0 Days";

    localStorage.setItem("skill", skill);
    localStorage.setItem("goal", goal);

    updateProgress();
}

// ✅ Mark Complete
window.markComplete = function(){

    streak++;
    localStorage.setItem("streak", streak);

    document.getElementById("streakDisplay").innerText =
    "🔥 Current Streak: " + streak + " Days";

    updateProgress();

    // 🔥 Show motivational popup
    showPopup(getMessage());
}

// Run once on page load
updateProgress();

}
