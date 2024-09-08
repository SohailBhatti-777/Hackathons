window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var location = document.getElementById('location').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value;
        // Create dynamic resume
        resumeOutput.innerHTML = "\n            <div class=\"resume\">\n                <h1>".concat(name, "</h1>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <p><strong>Location:</strong> ").concat(location, "</p>\n\n                <h2>Education</h2>\n                <p>").concat(education, "</p>\n\n                <h2>Work Experience</h2>\n                <p>").concat(workExperience, "</p>\n\n                <h2>Skills</h2>\n                <p>").concat(skills, "</p>\n            </div>\n        ");
        // Show the generated resume
        resumeOutput.style.display = 'block';
    });
});
