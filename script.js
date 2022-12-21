var nameError = getElementById('name-error');
var emailError = getElementById('email-error');
var messageError = getElementById('message-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write a Full Name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}