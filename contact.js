document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
    };

    emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(() => {
            alert("Message sent successfully 🚀");
            this.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send message ❌");
        });
});
