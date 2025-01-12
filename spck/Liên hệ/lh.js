document.getElementById("supportForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn không tải lại trang

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset form
        document.getElementById("supportForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
