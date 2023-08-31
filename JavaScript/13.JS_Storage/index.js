// Accessing Elements
const saveLocalButton = document.getElementById("saveLocalBtn");
const retrieveLocalButton = document.getElementById("retrieveLocalBtn");
const saveSessionButton = document.getElementById("saveSessionBtn");
const retrieveSessionButton = document.getElementById("retrieveSessionBtn");
const outputParagraph = document.getElementById("output");

// Save to Local Storage

// When the "Save to Storage" button is clicked, the city name "Mumbai" is saved to 
// the local storage using localStorage.setItem(). The outputParagraph displays
// a message confirming the save.

saveLocalButton.addEventListener("click", function() {
  localStorage.setItem("cityLocal", "Mumbai");
  outputParagraph.textContent = "City saved to Local Storage: Mumbai";
});

// Retrieve from Local Storage
// When the "Retrieve from Storage" button is clicked, the city name is retrieved from
// local storage using localStorage.getItem(). If the city is found, the outputParagraph
// displays a message with the retrieved city name. If not found, a message indicates that 
// the city is not in local storage.

retrieveLocalButton.addEventListener("click", function() {
  const savedCityLocal = localStorage.getItem("cityLocal");
  if (savedCityLocal) {
    outputParagraph.textContent = "City retrieved from Local Storage: " + savedCityLocal;
  } else {
    outputParagraph.textContent = "City not found in Local Storage.";
  }
});

// Save to Session Storage
saveSessionButton.addEventListener("click", function() {
  sessionStorage.setItem("citySession", "Delhi");
  outputParagraph.textContent = "City saved to Session Storage: Delhi";
});

// Retrieve from Session Storage
retrieveSessionButton.addEventListener("click", function() {
  const savedCitySession = sessionStorage.getItem("citySession");
  if (savedCitySession) {
    outputParagraph.textContent = "City retrieved from Session Storage: " + savedCitySession;
  } else {
    outputParagraph.textContent = "City not found in Session Storage.";
  }
});
