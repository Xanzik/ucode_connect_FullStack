// script.js

function loadAndManipulateImage() {
    // Get the input URL
    const imageUrl = document.getElementById('imageUrl').value;

    // Create an image element
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Enable cross-origin requests
    img.src = imageUrl;

    img.onload = function() {

        // Create a canvas to manipulate the image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Determine the size for the square image
        const size = Math.min(img.width, img.height);
        canvas.width = size;
        canvas.height = size;

        // Draw the square image
        ctx.drawImage(img, 0, 0, size, size);

        // Display the square image
        const squareImage = document.getElementById('squareImage');
        squareImage.src = canvas.toDataURL();

        // Extract RGB channels using getImageData
        const imageData = ctx.getImageData(0, 0, size, size);

        // Create separate canvas elements for each channel
        const rCanvas = document.createElement('canvas');
        const gCanvas = document.createElement('canvas');
        const bCanvas = document.createElement('canvas');

        rCanvas.width = size;
        rCanvas.height = size;
        gCanvas.width = size;
        gCanvas.height = size;
        bCanvas.width = size;
        bCanvas.height = size;

        const rCtx = rCanvas.getContext('2d');
        const gCtx = gCanvas.getContext('2d');
        const bCtx = bCanvas.getContext('2d');

        // Extract R, G, and B channels
        for (let i = 0; i < imageData.data.length; i += 4) {
            const r = imageData.data[i];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];

            // Set R channel
            rCtx.fillStyle = `rgb(${r}, 0, 0)`;
            rCtx.fillRect(i / 4 % size, Math.floor(i / (4 * size)), 1, 1);

            // Set G channel
            gCtx.fillStyle = `rgb(0, ${g}, 0)`;
            gCtx.fillRect(i / 4 % size, Math.floor(i / (4 * size)), 1, 1);

            // Set B channel
            bCtx.fillStyle = `rgb(0, 0, ${b})`;
            bCtx.fillRect(i / 4 % size, Math.floor(i / (4 * size)), 1, 1);
        }

        // Display R, G, and B channels
        const rChannel = document.getElementById('rChannel');
        rChannel.src = rCanvas.toDataURL();
        const gChannel = document.getElementById('gChannel');
        gChannel.src = gCanvas.toDataURL();
        const bChannel = document.getElementById('bChannel');
        bChannel.src = bCanvas.toDataURL();
    };
}
