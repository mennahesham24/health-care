let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
showReviewBtn.addEventListener("click", () => {
    reviewSection.classList.toggle('show'); 


const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector('button.login');
const formFields = [emailInput, passwordInput];


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains('error-message')) {
        error = document.createElement('div');
        error.classList.add('error-message');
        error.style.color = 'red';
        error.style.fontSize = '0.8rem';
        error.style.marginTop = '5px';
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
}


function removeError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains('error-message')) {
        error.remove();
    }
}


loginButton.addEventListener('click', (e) => {
    e.preventDefault(); 

    let isValid = true;

    
    if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    } else {
        removeError(emailInput);
    }

   
    if (passwordInput.value.trim().length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters.');
        isValid = false;
    } else {
        removeError(passwordInput);
    }

    
    if (isValid) {
        alert('Login successful!');
        
    }
});


formFields.forEach((field) => {
    field.addEventListener('focus', () => {
        field.style.borderColor = '#4CAF50';
        field.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    });

    field.addEventListener('blur', () => {
        field.style.borderColor = '#ccc';
        field.style.boxShadow = 'none';
    });
});
const welcomeImage = document.querySelector('.welcome-image');
const welcomeText = document.querySelector('.welcome-section h2');


welcomeImage.addEventListener('mouseover', () => {
    welcomeImage.style.transform = 'scale(1.1)';
    welcomeImage.style.transition = 'transform 0.3s ease';
});

welcomeImage.addEventListener('mouseout', () => {
    welcomeImage.style.transform = 'scale(1)';
});


welcomeText.addEventListener('mouseover', () => {
    welcomeText.style.color = '#45a049';
});

welcomeText.addEventListener('mouseout', () => {
    welcomeText.style.color = '#4CAF50';
});



});

