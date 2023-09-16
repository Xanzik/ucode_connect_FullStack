function generateHash() {
    const password = document.getElementById("password").value;
    const salt = document.getElementById("salt").value;
    const hashedPassword = password + salt;

    document.getElementById("hashResult").innerText = "Hashed Password: " + hashedPassword;
}

function saveToSession() {
    const password = document.getElementById("password").value;
    const salt = document.getElementById("salt").value;

    console.log(password);

    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, salt })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById("savedData").innerText = data;
    });
}

function checkGuess() {
    const guess = document.getElementById("guess").value;

    fetch('/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ guess })
    })
    .then(response => response.text())
    .then(data => {
        const passwordStatus = document.getElementById("passwordStatus");
        if (data === 'Hacked!') {
            passwordStatus.style.color = 'green';
        } else {
            passwordStatus.style.color = 'red';
        }
        passwordStatus.innerText = data;
    });
}

function clearSession() {
    sessionStorage.removeItem("savedPassword");
    sessionStorage.removeItem("savedSalt");
    document.getElementById("savedData").innerText = "";
    document.getElementById("hashResult").innerText = "";
    document.getElementById("password").value = "";
    document.getElementById("salt").value = "";
    document.getElementById("guess").value = "";
}