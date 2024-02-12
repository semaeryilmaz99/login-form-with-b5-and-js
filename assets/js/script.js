var Users = [];

const openSignUpModal = new bootstrap.Modal(document.getElementById('signUpModal'));

function openModal() {
    openSignUpModal.show();
}

function closeModal() {
    openSignUpModal.hide();
    var firstName = document.getElementById('firstName').value = '';
    var lastName = document.getElementById('lastName').value = '';
    var userName = document.getElementById('userName').value = '';
    var email = document.getElementById('email').value = '';
    var password = document.getElementById('password').value = '';
}

function signUp() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var userName = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (firstName == '' || lastName == '' || userName == '' || email == '' || password == '') {
        alert('Please write all the necessary informations.');
        return false;
    };

    if (password.length < 8) {

        alert("Password must be at least 8 characters");
        return false;

    } else if (password.search(/[0-9]/) < 0) {

        alert("Password must contain at least one number");
        return false;

    } else {
        closeModal();
        window.location.href = "/website.html";

    };

    var kullanici = new User(firstName, lastName, userName, email, password);
    Users.push(kullanici);
};



function addPassword() {
    var enterPass = document.getElementById('enter-pass').value;
    var enterPassAgain = document.getElementById('enter-pass-again').value;
    if (enterPass != enterPassAgain) {
        alert('Two inputs are different.');
        return false;
    } else if (enterPass.length <= 8) {
        alert('Password must be longer than 8 characters.');
        return false;
    } else {
        alert('Password added successfully.')
        window.location.href = "/website.html";
    };
};

function login() {
    var emailLogin = document.getElementById('email-login').value;
    var passwordLogin = document.getElementById('password-login').value;
    if (emailLogin == '' || passwordLogin == '') {
        alert('You should add all the necessary informations.');
        return false;
    };
    window.location.href = "/website.html";
    var emailLogin = document.getElementById('email-login').value = '';
    var passwordLogin = document.getElementById('password-login').value = '';
};

// const form = document.querySelector("form")

// form.addEventListener('submit', e => {
//     if (!form.checkValidity()) {
//         e.preventDefault()
//     }

//     form.classList.add('was-validated');
// })