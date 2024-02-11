const openEnterCodeModal = new bootstrap.Modal(document.getElementById('enterCodeModal'));

function openModal() {

    var inputMail = document.getElementById('input-mail').value;
    if (inputMail == '') {
        alert('Please enter your email address.');
        return false;
    };
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
    } else if (verifyCode.length < 6) {
        alert('You did not add all the code.');
        return false;
    };
    closeModal();
    console.log('you verified your code.')
};

