window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form submission

        // Get form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const location = (document.getElementById('location') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        // Create dynamic resume
        resumeOutput.innerHTML = `
            <div class="resume">
                <h1>${name}</h1>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Location:</strong> ${location}</p>

                <h2>Education</h2>
                <p>${education}</p>

                <h2>Work Experience</h2>
                <p>${workExperience}</p>

                <h2>Skills</h2>
                <p>${skills}</p>
            </div>
        `;

        // Show the generated resume
        resumeOutput.style.display = 'block';
    });
});
