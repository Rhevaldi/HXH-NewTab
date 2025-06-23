const apiKey = "c7bc0518773ba4e12e08f95db0b52ac9";
const city = "Tenggarong,ID";

function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log("Fetching weather from:", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    })
    .then((data) => {
      console.log("Weather data:", data);
      document.getElementById("city").textContent = data.name;
      document.getElementById("temperature").textContent = `${data.main.temp}°C`;
      document.getElementById("description").textContent = data.weather[0].description;
    })
    .catch((error) => {
      document.getElementById("city").textContent = "Gagal memuat cuaca.";
      console.error("Terjadi kesalahan:", error);
    });
}

getWeather();
