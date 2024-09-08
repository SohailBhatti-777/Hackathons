window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

    // Function to handle resume generation
    const generateResume = () => {
        // Get form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const location = (document.getElementById('location') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        // Create dynamic resume with contenteditable sections
        resumeOutput.innerHTML = `
            <div class="resume">
                <h1 contenteditable="true" id="editable-name">${name}</h1>
                <p><strong>Email:</strong> <span contenteditable="true" id="editable-email">${email}</span></p>
                <p><strong>Phone:</strong> <span contenteditable="true" id="editable-phone">${phone}</span></p>
                <p><strong>Location:</strong> <span contenteditable="true" id="editable-location">${location}</span></p>

                <h2>Education</h2>
                <p contenteditable="true" id="editable-education">${education}</p>

                <h2>Work Experience</h2>
                <p contenteditable="true" id="editable-work">${workExperience}</p>

                <h2>Skills</h2>
                <p contenteditable="true" id="editable-skills">${skills}</p>
            </div>
        `;

        // Show the resume section
        resumeOutput.style.display = 'block';

        // Add event listeners for content editable sections to update the data in real-time
        const sections = ['editable-name', 'editable-email', 'editable-phone', 'editable-location', 'editable-education', 'editable-work', 'editable-skills'];

        sections.forEach(sectionId => {
            const sectionElement = document.getElementById(sectionId) as HTMLElement;
            sectionElement?.addEventListener('input', () => {
                updateResumeData(sectionId, sectionElement.innerText);
            });
        });
    };

    // Function to handle updates (can be enhanced to store in local storage or database)
    const updateResumeData = (sectionId: string, updatedContent: string) => {
        // Here you could persist the updated content (e.g., to local storage or a backend)
        console.log(`${sectionId} updated: ${updatedContent}`);
    };

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form submission
        generateResume();
    });
});
