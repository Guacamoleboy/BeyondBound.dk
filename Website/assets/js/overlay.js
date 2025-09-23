const settingsButton = document.getElementById('settingsButton');
const settingsOverlay = document.getElementById('settingsOverlay');
const closeOverlay = document.getElementById('closeOverlay');
const startZoom = document.getElementById('startZoom');
const zoomValue = document.getElementById('zoomValue');
const loginOverlay = document.getElementById('loginOverlay');
const createOverlay = document.getElementById('createOverlay');
const loginButton = document.getElementById('loginButton');
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

loginButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Username:", username);
    console.log("Password:", password);

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
        const response = await fetch('php/login.php', {
            method: 'POST',
            body: formData
        });

        const text = await response.text();
        console.log("Raw response from PHP:", text);

        let result;
        try {
            result = JSON.parse(text);
        } catch (err) {
            console.error("JSON parse error:", err);
            showNotification("Server returned invalid response", "danger");
            return;
        }

        if (result.success) {
            loginOverlay.style.display = 'none';
            showNotification("Login success!", "success");
        } else {
            showNotification(result.message || "Wrong credentials", "danger");
        }
    } catch (err) {
        console.error("Request failed:", err);
        showNotification("Login request failed", "danger");
    }
});