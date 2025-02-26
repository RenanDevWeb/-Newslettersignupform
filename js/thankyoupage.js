window.addEventListener("DOMContentLoaded", (event) => {
    var email = document.querySelector("#email")
    var emailLocalStorage = localStorage.getItem("email")
    email.innerText = emailLocalStorage
});


