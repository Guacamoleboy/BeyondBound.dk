const settingsButton = document.getElementById('settingsButton');
const settingsOverlay = document.getElementById('settingsOverlay');
const closeOverlay = document.getElementById('closeOverlay');
const startZoom = document.getElementById('startZoom');
const zoomValue = document.getElementById('zoomValue');
const loginOverlay = document.getElementById('loginOverlay');
const createOverlay = document.getElementById('createOverlay');
const createAccountButton = document.getElementById('createAccountButton');
const backToLoginButton = document.getElementById('backToLoginButton');

settingsButton.addEventListener('click', (e) => {
    e.preventDefault();
    settingsOverlay.classList.add('active');
});

closeOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    settingsOverlay.classList.remove('active');
});

startZoom.addEventListener('input', () => {
    zoomValue.textContent = startZoom.value;
});

loginButton.addEventListener('click', () => {
    loginOverlay.style.display = 'none';
});

loginOverlay.style.display = 'flex';
createOverlay.style.display = 'none';

createAccountButton.addEventListener('click', () => {
    loginOverlay.style.display = 'none';
    createOverlay.style.display = 'flex';
});

backToLoginButton.addEventListener('click', () => {
    createOverlay.style.display = 'none';
    loginOverlay.style.display = 'flex';
});