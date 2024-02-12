const openEnterCodeModal = new bootstrap.Modal(document.getElementById('enterCodeModal'));

function openModal() {

    var inputMail = document.getElementById('email').value;
    if (inputMail == '') {
        alert('Please enter your email address.');
        return false;
    } alert('We have send a verify code to your email address.');

    openEnterCodeModal.show();
}

function closeModal() {
    openEnterCodeModal.hide();
    var verifyCode = document.getElementById('input-code').value = '';

}

function verifyCode() {
    var verifyCode = document.getElementById('input-code').value;


    if (verifyCode == '') {
        alert('Please enter the code.');
        return false;
    } else if (verifyCode.length < 6 || verifyCode.length > 6) {
        alert('Code must be 6 characters.');
        return false;
    };
    closeModal();

    window.location.href = "/new-password.html";
};



