const apiUrl = '/api/characters';

async function fetchMarvelData() {
    try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        const characterData = jsonData.data.results[0]; 

        const marvelDataElement = document.getElementById('marvel-data');
        marvelDataElement.innerHTML = ''; 

 
        const nameElement = document.createElement('h1');
        nameElement.textContent = characterData.name;
        marvelDataElement.appendChild(nameElement);

  
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = characterData.description || 'None';
        marvelDataElement.appendChild(descriptionElement);


        const thumbnailElement = document.createElement('img');
        thumbnailElement.src = `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`;
        thumbnailElement.alt = characterData.name;
        marvelDataElement.appendChild(thumbnailElement);


        if (characterData.comics.available > 0) {
            const comicsElement = document.createElement('div');
            comicsElement.classList.add('comics-container');

            const comicsTitle = document.createElement('h2');
            comicsTitle.textContent = 'Comics';
            comicsElement.appendChild(comicsTitle);

            const comicsList = document.createElement('ul');
            characterData.comics.items.forEach(comic => {
                const comicItem = document.createElement('li');
                comicItem.textContent = comic.name;
                comicsList.appendChild(comicItem);
            });

            comicsElement.appendChild(comicsList);
            marvelDataElement.appendChild(comicsElement);
        }


    } catch (error) {
        console.error('Error:', error);
    }
}

fetchMarvelData();
