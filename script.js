// ===============================
// STORE BUTTONS
// ===============================

document.getElementById("appStoreBtn").addEventListener("click", () => {
    window.open(
        "https://apps.apple.com/app/id1053012308", // Clash Royale App Store
        "_blank"
    );
});

document.getElementById("playStoreBtn").addEventListener("click", () => {
    window.open(
        "https://play.google.com/store/apps/details?id=com.supercell.clashroyale",
        "_blank"
    );
});


// ===============================
// CONTACT FORM (MAILTO DEMO)
// ===============================

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    const mailtoLink = `
mailto:youremail@gmail.com
?subject=Contact from ${name}
&body=From: ${email}%0A%0A${message}
    `;

    window.location.href = mailtoLink.trim();
});
