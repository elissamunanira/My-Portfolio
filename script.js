var nameError = getElementById('name-error');
var emailError = getElementById('email-error');
var messageError = getElementById('message-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.style.display = 'Name is required';
        return false;
    }
}