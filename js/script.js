document.querySelector(".form").addEventListener('submit',function(e){
    e.preventDefault()
    var email = document.querySelector("#email").value
    
    if(validateEmail(email)){
        window.location.href = "../thanks.html";
        localStorage.setItem("email",email)
    }
    
})

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}