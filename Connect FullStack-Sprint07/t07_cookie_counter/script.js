function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

function updateLoadCount() {
    const lastLoadTime = getCookie("lastLoadTime");
    const currentTime = new Date().getTime();
    
    if (!lastLoadTime || currentTime - parseInt(lastLoadTime) >= 60000) {

        setCookie("lastLoadTime", currentTime, 60);
        setCookie("loadCount", 1, 60);
    } else {

        const currentCount = parseInt(getCookie("loadCount")) || 0;
        setCookie("loadCount", currentCount + 1, 60);
    }

    const loadCountElement = document.getElementById("loadCount");
    loadCountElement.textContent = getCookie("loadCount");
}

window.addEventListener("load", updateLoadCount);
