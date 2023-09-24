document.getElementById('btn-login').addEventListener('click', function () {
    // get user email
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    // get user password
    const passFild = document.getElementById('user-pass');
    const pass = passFild.value;
    // check email and password
    if (email == 'ab@gb.com' && pass == '121') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid!!')
    }
})