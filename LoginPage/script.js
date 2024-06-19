
const EmailInput = document.getElementById("emailInput");
const PasswordInput = document.getElementById("passwordInput");
const emailErrorMessage = document.getElementById("emailError");
const passwordErrorMessage = document.getElementById("passwordError");

async function fetchData() {
  try {
    const response = await fetch('HRinfo.json');
    const userData = await response.json();
    const password = userData.password;
    const email = userData.email;
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    
    console.log("Password and email stored in local storage.");
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

function InputValidtion() {
  const storedPassword = localStorage.getItem("password");
  const storedEmail = localStorage.getItem("email");
  
  let inpValid = true;

  if (EmailInput.value !== storedEmail) {
    emailErrorMessage.innerHTML = "Email not correct";
    inpValid = false;
  } else {
    emailErrorMessage.innerHTML = ""; 
  }

  if (PasswordInput.value !== storedPassword) {
    passwordErrorMessage.innerHTML = "Password not correct";
    inpValid = false;
  } else {
    passwordErrorMessage.innerHTML = ""; 
  }

  if (inpValid) {
    window.location.href = "home.html"; 
  }

  return inpValid;
}
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); 
  InputValidtion();
});
