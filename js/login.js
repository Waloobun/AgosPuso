// Sample user database na pwede gamitin
const users = [
    { username: 'user1', password: 'password123' },
    { username: 'admin', password: 'admin123' },
];

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');
const errorMessage = document.getElementById('errorMessage');


document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberCheckbox.checked = true;
    }
});


loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    

    if (!username || !password) {
        showError('Please enter both username and password');
        return;
    }
    

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {

        if (rememberCheckbox.checked) {
            localStorage.setItem('savedUsername', username);
        } else {
            localStorage.removeItem('savedUsername');
        }
        
        showSuccess(`Welcome, ${username}!`);

        loginForm.reset();
        

        setTimeout(function() {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        showError('Invalid username or password');
        passwordInput.value = '';
    }
});


function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    setTimeout(function() {
        errorMessage.classList.remove('show');
    }, 5000);
}


function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    errorMessage.parentNode.insertBefore(successDiv, errorMessage);
    setTimeout(function() {
        successDiv.remove();
    }, 3000);
}
