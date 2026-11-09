/*Mangaverse Collectibles - Interactive Forms*/

document.addEventListener("DOMContentLoaded", () => {  /*(MDN Web Docs, 2026)*/
    // Select the forms from both contact.html and enquiry.html
    const storeForms = document.querySelectorAll(".interactive-form");

    storeForms.forEach(form => {
        form.addEventListener("submit", (event) => {
            // Prevent the standard page reload
            event.preventDefault();

            // Fetch the container box holding this specific form
            const formContainer = form.parentElement;

            // Extract the submitter's name to personalize the message
            const clientNameInput = form.querySelector('input[type="text"]');
            const clientName = clientNameInput ? clientNameInput.value.trim() : "Collector";

            //  Smoothly fade out the form elements
            form.style.transition = "opacity 0.3s ease";
            form.style.opacity = "0";

            setTimeout(() => {
                //  Clear the form HTML and inject the success card component
                formContainer.innerHTML = `
                    <div class="success-message" style="text-align: center; padding: 20px;">
                        <div style="font-size: 3rem; color: var(--accent-cyan); margin-bottom: 15px;">✓</div>
                        <h3 style="color: var(--accent-cyan); margin-bottom: 10px;">Arigatou, ${clientName}!</h3>
                        <p style="color: var(--text-main); margin-bottom: 20px;">Your submission has been safely uploaded to the Mangaverse network. Our support team will respond shortly.</p>
                        <a href="index.html" class="btn-primary" style="display: inline-block; width: auto;">Return to Hub</a>
                    </div>
                `;
            }, 300);
        });
    });
});
