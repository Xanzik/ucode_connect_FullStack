// Get the necessary elements
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = sliderContainer.getElementsByTagName('img');

let currentImageIndex = 0;

// Function to show the current image
function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    
    images[index].style.display = 'block';
}

// Show the first image initially
showImage(currentImageIndex);

// Function to go to the previous image
function goToPrevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showImage(currentImageIndex);
}

// Function to go to the next image
function goToNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', goToPrevImage);
nextBtn.addEventListener('click', goToNextImage);

// Automatically slide the images every 3 seconds
let slideInterval = setInterval(goToNextImage, 3000);

// Stop the automatic sliding when any navigation button is clicked
prevBtn.addEventListener('click', stopSlideInterval);
nextBtn.addEventListener('click', stopSlideInterval);

function stopSlideInterval() {
    clearInterval(slideInterval);
}
