/*
    Script Title: Cold Palmer Site Scripts
    Author: Harrison Hunt
    Version: 1.0
    Description: Implements dark/light mode toggle and contact form validation.
    Usage: Include this script in all pages for consistent functionality.
*/

/* Ensure DOM is loaded before executing scripts */
document.addEventListener("DOMContentLoaded", function() {

    // Dark mode toggle button
    const toggleButton = document.getElementById("theme-toggle");
    if(toggleButton){
        toggleButton.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode"); // toggles .dark-mode class
        });
    }

    // Contact form validation (only runs if form exists)
    const contactForm = document.getElementById("contactForm");
    if(contactForm){
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const response = document.getElementById("formResponse");

            if(!name || !email || !message){
                response.textContent = "⚠️ Please fill in all fields.";
                response.style.color = "red";
            } else if(!email.includes("@")){
                response.textContent = "⚠️ Please enter a valid email address.";
                response.style.color = "red";
            } else {
                response.textContent = "✅ Thank you! Your message has been sent.";
                response.style.color = "green";
                contactForm.reset();
            }
        });
    }

});
