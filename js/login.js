document.getElementById('login-button').addEventListener('click', () => {
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    const userEmailValue = userEmail.value;
    const userPasswordValue = userPassword.value;

    if (userEmailValue === 'sneha@gmail.com' && userPasswordValue === '1234') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Wrong username or password!');
    }
    userEmail.value = '';
    userPassword.value = '';
});