document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let userEmail = document.getElementById('userEmail');
    let userPassword = document.getElementById('userPassword');
    
    // Clear previous invalid states
    userEmail.classList.remove('is-invalid');
    userPassword.classList.remove('is-invalid');
    
    // Check if the email and password fields are filled
    let valid = true;
    
    if (!userEmail.value) {
        userEmail.classList.add('is-invalid');
        valid = false;
    }
    
    if (!userPassword.value) {
        userPassword.classList.add('is-invalid');
        valid = false;
    }
    
    if (valid) {
        localStorage.setItem('Email', userEmail.value);
        localStorage.setItem('Password', userPassword.value);

        alert("Registration is completed!");
        window.location.href = "/Cartzilla_capstone3/login.html"; 
    }
});