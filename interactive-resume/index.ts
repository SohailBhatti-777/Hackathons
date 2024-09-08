window.addEventListener("DOMContentLoaded", () => {
  // Get references to the buttons and sections
  const toggleSkillsButton = document.getElementById("toggle-skills");
  const skillsSection = document.getElementById("skills");
  const toggleWorkExpButton = document.getElementById("toggle-work-experience");
  const workExperienceSection = document.getElementById("work-experience");

  // Check if elements exist and add event listeners
  if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener("click", () => {
      skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
    });
  }

  if (toggleWorkExpButton && workExperienceSection) {
    toggleWorkExpButton.addEventListener("click", () => {
      workExperienceSection.style.display = workExperienceSection.style.display === "none" ? "block" : "none";
    });
  }
});
