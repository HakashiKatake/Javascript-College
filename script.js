const toggleButton = document.getElementById("toggle-button");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    
    if (body.classList.contains("dark")) {
        toggleButton.textContent = "Light Mode";
    } else {
        toggleButton.textContent = "Dark Mode";
    }
    console.log("Theme toggled!");
})

