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
        functionAlert('Please write all the necessary informations.');
        return false;
    };

    if (password.length < 8) {

        functionAlert("Password must be at least 8 characters");
        return false;

    } else if (password.search(/[0-9]/) < 0) {

        functionAlert("Password must contain at least one number");
        return false;

    } else {
        closeModal();

    };

    var kullanici = new User(firstName, lastName, userName, email, password);
    Users.push(kullanici);
};

var enterPass = document.getElementById('enter-pass').value;
var enterPassAgain = document.getElementById('enter-pass-again').value;
var addPassword = document.getElementById('add-password');

function addPassword() {
    if (enterPass !== enterPassAgain) {
        alert('Two inputs are not same.');
    } else {
        window.location.href = "/website.html";
        alert('Password selected successfully.');
    };
};