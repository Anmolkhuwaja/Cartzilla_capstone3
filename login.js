document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let localEmail = localStorage.getItem('Email');
    let localPassword = localStorage.getItem('Password');
  
    let userEmail = document.getElementById('userEmail');
    let userPassword = document.getElementById('userPassword');
  
    // Get the input values
    let userEmailValue = userEmail.value;
    let userPasswordValue = userPassword.value;
  
    // Clear any previous errors
    clearValidation(userEmail);
    clearValidation(userPassword);
  
    // Check if the input values match the stored values
    if (userEmailValue === localEmail && userPasswordValue === localPassword) {
      alert("Login successfully!");
      window.location.href = "/Cartzilla_capstone3/index.html";
    } else {
      // Show error messages and add red border if the input values are incorrect
      if (userEmailValue !== localEmail) {
        setValidationError(userEmail, "Enter a valid email address!");
      }
      if (userPasswordValue !== localPassword) {
        setValidationError(userPassword, "Password is incorrect!");
      }
    }
  });
  
  // Function to set the error message and add the red border
  function setValidationError(inputElement, message) {
    inputElement.classList.add('is-invalid'); // Add Bootstrap invalid class for red border
    inputElement.nextElementSibling.textContent = message; // Display the error message
    inputElement.nextElementSibling.style.display = 'block'; // Make the error message visible
  }
  
  // Function to clear the validation errors
  function clearValidation(inputElement) {
    inputElement.classList.remove('is-invalid'); // Remove the red border
    inputElement.nextElementSibling.style.display = 'none'; // Hide the error message
  }