function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var totalImages = document.querySelectorAll('img[data-src]').length;
var loadedCount = 0;

function lazyLoadImages() {
  var images = document.querySelectorAll('img[data-src]');

  Array.prototype.forEach.call(images, function(image) {
    if (isElementInViewport(image)) {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.removeAttribute('data-src');
      loadedCount++;

      if (loadedCount === totalImages) {
        updateMessage(loadedCount);
      }
    }
  });
}

function updateMessage(loadedCount) {
  var messageElement = document.getElementById('message');
  messageElement.textContent = loadedCount + ' images loaded from ' + totalImages;

  if (loadedCount === totalImages) {
    messageElement.classList.add('success');
    setTimeout(function() {
      messageElement.classList.remove('show');
    }, 3000);
  } else {
    messageElement.classList.remove('success');
    messageElement.classList.add('show');
  }
}

function lazyLoadHandler() {
  lazyLoadImages();
  updateMessage(loadedCount);
}

window.addEventListener('scroll', lazyLoadHandler);
lazyLoadHandler();
  