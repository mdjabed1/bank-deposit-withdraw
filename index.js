document.getElementById('submit-button').addEventListener('click', function () {
    event.preventDefault();
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'mdjabed234353@gmail.com' && userPassword == '01720395322') {
        window.location.href = 'bank'
    }
})