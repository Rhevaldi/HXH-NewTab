document.addEventListener('DOMContentLoaded', () => {
    // --- Clock Functionality ---
    const clockElement = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update clock every second
    setInterval(updateClock, 1000);
    // Set initial clock display
    updateClock();

    // --- Weather Functionality ---
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // GANTI DENGAN API KEY MU
    // Kamu bisa dapatkan API Key di: https://openweathermap.org/api

    function getWeatherData(latitude, longitude) {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

        fetch(weatherUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                cityElement.textContent = `${data.name}, ${data.sys.country}`;
                temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
                descriptionElement.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                cityElement.textContent = 'Failed to load weather.';
                temperatureElement.textContent = '';
                descriptionElement.textContent = '';
            });
    }

    // Get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherData(lat, lon);
        }, error => {
            console.error('Geolocation error:', error);
            cityElement.textContent = 'Geolocation denied or unavailable.';
            temperatureElement.textContent = '';
            descriptionElement.textContent = 'Please allow location access.';
        });
    } else {
        cityElement.textContent = 'Geolocation not supported by your browser.';
        temperatureElement.textContent = '';
        descriptionElement.textContent = '';
    }
});