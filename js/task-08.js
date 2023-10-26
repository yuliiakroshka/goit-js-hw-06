const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
        if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    };
    console.log({email:email.value, password:password.value});
    // console.log(`Email: ${email.value} password: ${password.value}`);
    event.currentTarget.reset();
};
