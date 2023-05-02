const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#cpassword");

passwordInput.addEventListener("focusout", (event) => {
    console.log("HELLO");
    if(passwordInput.value == confirmPasswordInput.value) {
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");
    }
    else {
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
    }
})

