    // Check if the browser supports cookies
    function areCookiesEnabled() {
      return navigator.cookieEnabled;
    }

    // Add note to the cookies
    function addToArchive() {
      var note = document.getElementById("textInput").value.trim();

      if (note === "") {
        alert("It's empty. Try to input something in 'Text Input'.");
        return;
      }

      var archive = getArchiveFromCookies();
      archive.push(note);
      saveArchiveToCookies(archive);

      updateOutputField();
    }

    // Clear the cookies and the output field
    function clearArchive() {
      if (confirm("Are you sure?")) {
        document.cookie = "notes=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.getElementById("outputField").textContent = "[Empty]";
      }
    }

    // Get the archive array from the cookies
    function getArchiveFromCookies() {
      var archive = [];
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf("notes=") === 0) {
          archive = JSON.parse(decodeURIComponent(cookie.substring(6)));
          break;
        }
      }

      return archive;
    }

    // Save the archive array to the cookies
    function saveArchiveToCookies(archive) {
      var expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);
      document.cookie = "notes=" + encodeURIComponent(JSON.stringify(archive)) + "; expires=" + expirationDate.toUTCString() + "; path=/;";
      console.log(document.cookie);
    }

    // Update the output field with the notes from the cookies
    function updateOutputField() {
      var archive = getArchiveFromCookies();
      var outputField = document.getElementById("outputField");

      if (archive.length === 0) {
        outputField.textContent = "[Empty]";
      } else {
        outputField.textContent = archive.join(", ");
      }
    }

    // Load the initial notes from cookies when the page is loaded
    window.onload = function () {
      if (areCookiesEnabled()) {
        updateOutputField();
      } else {
        alert("Cookies are disabled in your browser. Note tracking requires cookies to function properly.");
      }
    };