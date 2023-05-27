// Add your API key here
const apiKey = 'de1fc64c01c035e1eb8aea296ca3a8c2';
// Add the city name for the forecast
const city = 'London';

// Fetch the weather forecast data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Unable to fetch weather data.');
    }
    return response.json();
  })
  .then(data => {
    const cityNameElement = document.getElementById('city-name');
    cityNameElement.textContent = data.city.name;

    const forecast = document.getElementById('forecast');
    const forecastData = data.list;

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Loop through the forecast data
    for (const item of forecastData) {
      const forecastDate = new Date(item.dt_txt);
      forecastDate.setHours(0, 0, 0, 0);

      // Display the forecast for the daytime
      if (forecastDate >= today && item.dt_txt.includes('12:00:00')) {
        const date = forecastDate.toDateString();
        const temperature = item.main.temp;
        const weatherIcon = item.weather[0].icon;

        // Create forecast card
        const card = document.createElement('div');
        card.classList.add('card');

        // Display date
        const dateElement = document.createElement('h2');
        dateElement.textContent = date;
        card.appendChild(dateElement);

        // Display weather icon
        const iconElement = document.createElement('img');
        iconElement.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;
        card.appendChild(iconElement);

        // Display temperature
        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `Temperature: ${temperature}°C`;
        card.appendChild(temperatureElement);

        forecast.appendChild(card);
      }
    }
  })
  .catch(error => console.error(error));
