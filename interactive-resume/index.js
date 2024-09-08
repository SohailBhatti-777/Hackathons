window.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and sections
    var toggleSkillsButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    var toggleWorkExpButton = document.getElementById("toggle-work-experience");
    var workExperienceSection = document.getElementById("work-experience");
    // Check if elements exist and add event listeners
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener("click", function () {
            skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
        });
    }
    if (toggleWorkExpButton && workExperienceSection) {
        toggleWorkExpButton.addEventListener("click", function () {
            workExperienceSection.style.display = workExperienceSection.style.display === "none" ? "block" : "none";
        });
    }
});
