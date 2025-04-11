document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (e) {
   
        document.getElementById("nameError").innerHTML = '';
        document.getElementById("emailError").innerHTML = '';
        document.getElementById("passwordError").innerHTML = '';
        document.getElementById("confirmPasswordError").innerHTML = '';

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;

        let hasError = false;

        
        if (password.length < 8) {
            document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long.";
            hasError = true;
        }

        
        if (password !== confirmPassword) {
            document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match!";
            hasError = true;
        }

        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
            hasError = true;
        }

        
        if (hasError) {
            e.preventDefault();
        }
    });
});