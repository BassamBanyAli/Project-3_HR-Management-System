if (localStorage.getItem("auth_links") === "true") {
    document.getElementById("RegsLink").style.display = "none";
    document.getElementById("LoginLink").style.display = "none";

    const unorderList = document.querySelector("ul");
    const serviceLi=document.createElement("li");
    const serviceLink=document.createElement("a");
    serviceLink.href="/servicesPage/services.html";
    serviceLink.textContent="services";
    serviceLi.appendChild(serviceLink);
    unorderList.appendChild(serviceLi);
    const logout = document.createElement("li");
    const logoutLink = document.createElement("a");
    logoutLink.href="#"
    logout.id = "logOut";
    logoutLink.textContent = "Logout";
    logout.appendChild(logoutLink);
    unorderList.appendChild(logout);

    const header = document.querySelector(".container-fluid");
    const icon = document.createElement('a');
    icon.className = 'btn-getstarted flex-md-shrink-0';
    icon.href = "/profile/profile2.html";
    const iElement = document.createElement('i');
    iElement.className = 'bi bi-person-check-fill';
    icon.appendChild(iElement);
    header.appendChild(icon);
}

const logOutcha = document.getElementById("logOut");
if (logOutcha) {
    logOutcha.addEventListener('click', function () {
        localStorage.setItem("auth_links", "false");
        window.location.href = '/starterPage/index.html';

    });
}
