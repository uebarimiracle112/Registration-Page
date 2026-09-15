const form = document.getElementById('main');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const fullNameVal = document.getElementById('fullName').value;
    const emailVal = document.getElementById('email').value;
    const phoneVal = document.getElementById('phone').value;
    const passwordval = document.getElementById('password').value;
    const confirmPasswordVal = document.getElementById('confirmPassword').value;

    if(passwordval !== confirmPasswordVal) {
        alert("password do not match. please try again.");
        return;
    }

    const userData = {
        name: fullNameVal,
        email: emailVal,
        phone: phoneVal,
        password: passwordval
    };

    const messageBox = document.getElementById('successMessage');

    messageBox.textContent = `Registration successful! Welcome, ${fullNameVal}!`;
    messageBox.style.display = "block";
    setTimeout(function(){
        messageBox.style.display = "none";
    }, 5000);

    console.log("Form successfully intercepted!");
    console.log("User data ready to send:", userData);

    form.reset();
}); 