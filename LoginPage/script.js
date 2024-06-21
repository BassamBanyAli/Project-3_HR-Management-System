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
                localStorage.setItem("json_password", password);
                localStorage.setItem("json_email", email);

                console.log("Password and email stored in local storage.");
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();

        function InputValidtion() {
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            const jsonEmail = localStorage.getItem("json_email");
            const jsonPassword = localStorage.getItem("json_password");
            const inputEmail = EmailInput.value;
            const inputPassword = PasswordInput.value;

            let user = storedUsers.find(user => user.email === inputEmail && user.password === inputPassword);
            let inpValid = true;

            if ((!user) && (inputEmail !== jsonEmail || inputPassword !== jsonPassword)) {
                emailErrorMessage.innerHTML = "Email or password not correct";
                passwordErrorMessage.innerHTML = "Email or password not correct";
                inpValid = false;
            } else {
                emailErrorMessage.innerHTML = "";
                passwordErrorMessage.innerHTML = "";
                localStorage.setItem("auth_links", "true");
                window.location.href = "/starterPage/index.html";
            }

            return inpValid;
        }

        document.getElementById("loginForm").addEventListener("submit", function(e) {
            e.preventDefault();
            InputValidtion();
        });