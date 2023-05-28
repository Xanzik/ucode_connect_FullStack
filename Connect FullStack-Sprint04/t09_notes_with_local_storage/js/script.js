// Check if the browser supports localStorage
function isLocalStorageEnabled() {
try {
    var testKey = "test";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
} catch (e) {
    return false;
}
}

// Add note to the localStorage with the current date
function addToArchive() {
    var note = document.getElementById("textInput").value.trim();
  
    if (note === "") {
      alert("It's empty. Try to input something in 'Text Input'.");
      return;
    }
  
    var archive = getArchiveFromLocalStorage();
    var currentDate = new Date(); // Get the current date and time
  
    // Create an object with the note and date
    var entry = {
      note: note,
      date: currentDate
    };
  
    archive.push(entry); // Add the entry to the archive
    saveArchiveToLocalStorage(archive);
  
    updateOutputField();
  }
  
  
  // Get the archive array from the localStorage
  function getArchiveFromLocalStorage() {
    var archive = localStorage.getItem("notesArchive");
    return archive ? JSON.parse(archive) : [];
  }
  
  // Save the archive array to the localStorage
  function saveArchiveToLocalStorage(archive) {
    localStorage.setItem("notesArchive", JSON.stringify(archive));
  }
  
  // Update the output field with the notes and dates from the localStorage
// Update the output field with the notes and dates from the localStorage
// Update the output field with the notes and dates from the localStorage
function updateOutputField() {
    var archive = getArchiveFromLocalStorage();
    var outputField = document.getElementById("outputField");
  
    if (archive.length === 0) {
      outputField.textContent = "[Empty]";
    } else {
      outputField.innerHTML = ""; // Clear the output field
  
      archive.forEach(function (entry) {
        var noteElement = document.createElement("div");
        var dateElement = document.createElement("span");
  
        noteElement.textContent = "--> " + entry.note;
  
        // Check if the entry has a valid date
        var date = new Date(Date.parse(entry.date));
        dateElement.textContent = formatDate(date);
  
        noteElement.appendChild(dateElement);
        outputField.appendChild(noteElement);
      });
    }
  }
  
  
  
  // Format the date as desired (e.g., DD/MM/YYYY HH:MM)
// Format the date as desired (e.g., DD/MM/YYYY HH:MM)
// Format the date as desired (e.g., DD/MM/YYYY HH:MM)
function formatDate(date) {
  
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = String(date.getFullYear()).slice(-2);
    var hours = String(date.getHours()).padStart(2, "0");
    var minutes = String(date.getMinutes()).padStart(2, "0");
    var seconds = String(date.getSeconds()).padStart(2, "0");
  
    return " [" + day + "." + month + "." + year + ", " + hours + ":" + minutes + ":" + seconds + "]";
  }
  
  
  
  // Clear the localStorage and the output field
  function clearArchive() {
    if (confirm("Are you sure?")) {
      localStorage.removeItem("notesArchive");
      document.getElementById("outputField").textContent = "[Empty]";
    }
  }
  
  // Load the initial notes from localStorage when the page is loaded
  window.onload = function () {
    if (typeof Storage !== "undefined") {
      updateOutputField();
    } else {
      alert("localStorage is not supported in your browser. Note tracking requires localStorage to function properly.");
    }
  };
  
  