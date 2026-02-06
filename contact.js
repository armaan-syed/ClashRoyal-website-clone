document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    const mailtoLink = `
mailto:armaansyed009@gmail.com@gmail.com
?subject=Contact from ${name}
&body=From: ${email}%0A%0A${message}
    `;

    window.location.href = mailtoLink.trim();
});
