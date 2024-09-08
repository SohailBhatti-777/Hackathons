window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    // Function to handle resume generation
    var generateResume = function () {
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var location = document.getElementById('location').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value;
        // Create dynamic resume with contenteditable sections
        resumeOutput.innerHTML = "\n            <div class=\"resume\">\n                <h1 contenteditable=\"true\" id=\"editable-name\">".concat(name, "</h1>\n                <p><strong>Email:</strong> <span contenteditable=\"true\" id=\"editable-email\">").concat(email, "</span></p>\n                <p><strong>Phone:</strong> <span contenteditable=\"true\" id=\"editable-phone\">").concat(phone, "</span></p>\n                <p><strong>Location:</strong> <span contenteditable=\"true\" id=\"editable-location\">").concat(location, "</span></p>\n\n                <h2>Education</h2>\n                <p contenteditable=\"true\" id=\"editable-education\">").concat(education, "</p>\n\n                <h2>Work Experience</h2>\n                <p contenteditable=\"true\" id=\"editable-work\">").concat(workExperience, "</p>\n\n                <h2>Skills</h2>\n                <p contenteditable=\"true\" id=\"editable-skills\">").concat(skills, "</p>\n            </div>\n        ");
        // Show the resume section
        resumeOutput.style.display = 'block';
        // Add event listeners for content editable sections to update the data in real-time
        var sections = ['editable-name', 'editable-email', 'editable-phone', 'editable-location', 'editable-education', 'editable-work', 'editable-skills'];
        sections.forEach(function (sectionId) {
            var sectionElement = document.getElementById(sectionId);
            sectionElement === null || sectionElement === void 0 ? void 0 : sectionElement.addEventListener('input', function () {
                updateResumeData(sectionId, sectionElement.innerText);
            });
        });
    };
    // Function to handle updates (can be enhanced to store in local storage or database)
    var updateResumeData = function (sectionId, updatedContent) {
        // Here you could persist the updated content (e.g., to local storage or a backend)
        console.log("".concat(sectionId, " updated: ").concat(updatedContent));
    };
    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        generateResume();
    });
});
