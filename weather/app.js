// app.js

const weatherForm = document.getElementById('weather-form');
const weatherInfo = document.getElementById('weather-info');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey = "d31bb10779245a40212c5c11d638313a"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${d31bb10779245a40212c5c11d638313a}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayWeather(data) {
    if (data.cod === '404') {
        weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
        return;
    }

    const { name, main, weather } = data;
    weatherInfo.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}

