// Get all the <li> elements
const liElements = document.getElementsByTagName('li');
// Iterate over each <li> element
for (let i = 0; i < liElements.length; i++) {
  const li = liElements[i];
  // Correct errors in attributes
  const classAttribute = li.getAttribute('class');
  const dataElement = li.getAttribute('data-element');
  if(classAttribute === 'good') {
    li.setAttribute('class', 'good');
  }
  if(classAttribute === 'evil') {
    li.setAttribute('class', 'evil');
  }
  if (!classAttribute || classAttribute !== 'good' && classAttribute !== 'evil') {
    li.setAttribute('class', 'unknown');
  }
  if (!dataElement) {
    li.setAttribute('data-element', 'none');
  }
  const name = li.textContent;
  const nameContainer = document.createElement('span');
  nameContainer.textContent = name;
  li.innerHTML = '';
  li.appendChild(nameContainer);
  const circleContainer = document.createElement('div');
  const dataElementAttribute = li.getAttribute('data-element').split(' ');
  for(let j = 0; j < dataElementAttribute.length; j++) {
    const circle = document.createElement('div');
    circle.classList.add('circle', 'elem', dataElementAttribute[j]);
    circleContainer.appendChild(circle);
    if (li.getAttribute('data-element') === 'none') {
      const line = document.createElement('div');
      line.classList.add('line');
      circle.appendChild(line);
    }
  }
  li.appendChild(circleContainer);
}
