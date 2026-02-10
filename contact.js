const form = document.getElementById("contactForm");
const button = document.getElementById("sendBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    button.disabled = true;
    button.textContent = "Sending...";

    const params = {
        from_name: form.name.value,   // matches EmailJS template
        reply_to: form.email.value,   // sender's email
        message: form.message.value,
    };

    emailjs
        .send("service_l9zqdb1", "template_lnce7i7", params)
        .then(() => {
            alert("Message sent successfully 🚀");
            form.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert(error.text || "Failed to send message ❌");
        })
        .finally(() => {
            button.disabled = false;
            button.textContent = "Send Message";
        });
});
