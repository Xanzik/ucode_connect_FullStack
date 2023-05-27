// Get references to the film list and film details elements
const filmList = document.getElementById("film-list");
const filmTitle = document.getElementById("film-title");
const filmPoster = document.getElementById("film-poster");
const filmDate = document.getElementById("film-date");
const filmInfo = document.getElementById("film-info");
const filmActors = document.getElementById("film-actors");

// Define an array of films
const films = [
    {
    id: 1,
    title: "John Wick 4",
    poster: "assets/images/John-Wick.jpg",
    date: "2023",
    info: "Leaving behind mountains of corpses, John Wick continues to hide from all kinds of hired killers, and now the hunt for him is led by a young and ambitious Board member named Marquis. Two managers of the Continental hotels in New York and Osaka, who decided to help the wayward killer out of old friendship, have already paid cruelly for it, but suddenly John finds out a way to get out of this seemingly hopeless situation",
    actors: "Keanu Reeves, Bill Skarsgard",
    backgroundImage: "assets/images/Fight-Club.jpg"
    },
    {
    id: 2,
    title: "The Witcher",
    poster: "assets/images/TheWitcher.jpg",
    date: "2023",
    info: "The witcher Geralt, a mutant and monster killer, travels across the Continent on his faithful horse named Roach. For a tight bag of minted coins, this man will save you from any persistent evil spirits — even from swamp monsters, werewolves and even enchanted princesses. In the rural wilderness, the local girl Yennefer, who was very unlucky with her appearance, but was lucky enough to have the ability to magic, is sold by her father to a sorceress as a student. And a young heiress of the kingdom of Cintra named Ciri is forced to go on the run when their country is captured by the empire of Nilfgaard. The fates of these three will be closely linked, but soon the fairy tale affects, but not soon the thing is done.",
    actors: "Henry Cavill, Freya Allan, Anya Chalotra",
    backgroundImage: "assets/images/Fight-Club.jpg"
    },
    {
    id: 3,
    title: "Fight Club",
    poster: "assets/images/Fight-Club.jpg",
    date: "1999",
    info: "An employee of an insurance company suffers from chronic insomnia and is desperately trying to escape from an excruciatingly boring life. One day, on another business trip, he meets a certain Tyler Durden, a charismatic soap merchant with a perverted philosophy. Tyler is sure that self—improvement is the lot of the weak, and the only thing worth living for is self—destruction. A little time passes, and now new friends are beating each other for nothing in the parking lot in front of the bar, and the cleansing fight gives them the highest bliss. Introducing other men to the simple joys of physical cruelty, they found a secret Fight Club, which is beginning to enjoy incredible popularity.",
    actors: "Henry Cavill, Freya Allan, Anya Chalotra",
    backgroundImage: "assets/images/Fight-Club.jpg"
    }
];

// Function to display film details based on the selected film's ID
function displayFilmDetails(id) {
    const film = films.find(f => f.id === id);
    if (film) {
    filmTitle.textContent = film.title;
    filmPoster.src = film.poster;
    filmDate.textContent = film.date;
    filmInfo.textContent = film.info;
    filmActors.textContent = film.actors;
    const background = document.getElementById("body");
    if (id === 1) {
        background.style.backgroundImage = "url('assets/images/John-Wick.jpg')";
      } else if (id === 2) {
        background.style.backgroundImage = "url('assets/images/TheWitcher-Back.jpg')";
      } else if (id === 3) {
        background.style.backgroundImage = "url('assets/images/Fight-Club-Back.jpg')";
      }
    }
    const del = document.getElementById("my-heading");
    del.style.display = "none";
}

// Add click event listeners to each film item in the list
filmList.addEventListener("click", function(event) {
    const clickedFilmId = parseInt(event.target.getAttribute("data-id"));
    displayFilmDetails(clickedFilmId);
});

    // Получаем все элементы с классом "film-item"
var filmItems = document.getElementsByClassName('film-item');

// Обходим каждый элемент и добавляем обработчик события "click"
for (var i = 0; i < filmItems.length; i++) {
    filmItems[i].addEventListener('click', function() {
    // Удаляем класс "active" у всех элементов
    for (var j = 0; j < filmItems.length; j++) {
        filmItems[j].classList.remove('active');
    }

    // Добавляем класс "active" к нажатому элементу
    this.classList.add('active');
    });
}