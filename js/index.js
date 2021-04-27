'use strict';

const formOffer = document.getElementById('form-offer');
const sumbit = document.getElementById('sumbit');
const REGEXLETTER = new RegExp(/^[a-zA-Z]*$/);
const REGEXEMAIL = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const REGEXPASSWORD = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
sumbit.addEventListener('click', (e) => {
    e.preventDefault();
    takeValueForm();
});

function takeValueForm() {
    for( let i = 0 ; i < formOffer.elements.length; i ++){
 
        switch (formOffer.elements[i].type) {
            case 'text':
                validateText(formOffer.elements[i].value, i) ? formOffer.elements[i].classList.remove('form-login__warning'): formOffer.elements[i].classList.add('form-login__warning');
                break;
            case 'email':
                validateEmail(formOffer.elements[i].value, i) ? formOffer.elements[i].classList.remove('form-login__warning'): formOffer.elements[i].classList.add('form-login__warning');
                break;
            case 'password':
                validatePassword(formOffer.elements[i].value, i) ? formOffer.elements[i].classList.remove('form-login__warning'): formOffer.elements[i].classList.add('form-login__warning');
                break;
        }
    }
}

function validateText(inputValue, index) {
    if( inputValue.length < 1 || !REGEXLETTER.test(inputValue) ) {
        document.getElementsByClassName('form-login__alert-message')[index].style.display = 'block';
        document.getElementsByClassName('icon-relative')[index].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('form-login__alert-message')[index].style.display = 'none';
    document.getElementsByClassName('icon-relative')[index].style.display = 'none';
    return true;
}


function validateEmail(inputValue, index) {
    if( inputValue.length < 1 || !REGEXEMAIL.test(inputValue) ) {
        document.getElementsByClassName('form-login__alert-message')[index].style.display = 'block';
        document.getElementsByClassName('icon-relative')[index].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('form-login__alert-message')[index].style.display = 'none';
    document.getElementsByClassName('icon-relative')[index].style.display = 'none';
    return true;
}

function validatePassword(inputValue, index) {
    if( inputValue.length < 1 || !REGEXPASSWORD.test(inputValue) ) {
        document.getElementsByClassName('form-login__alert-message')[index].style.display = 'block';
        document.getElementsByClassName('icon-relative')[index].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('form-login__alert-message')[index].style.display = 'none';
    document.getElementsByClassName('icon-relative')[index].style.display = 'none';
    return true;
}