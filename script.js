// Navigate to a particular section

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


// Contact button message

function showMessage() {

    alert("Thank you for visiting my resume! 😊");

}