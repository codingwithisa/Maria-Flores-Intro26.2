const tempBtn = document.querySelector("#tempBtn");
const conditionBtn = document.querySelector("#conditionBtn");
const result = document.querySelector("#result");

// ================= TEMP =================
tempBtn.addEventListener("click", function () {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=38.9&longitude=-77.0&current=temperature_2m&temperature_unit=fahrenheit",
  )
    .then((r) => r.json())
    .then((data) => {
      result.innerHTML = `
        <h2>Washington, DC</h2>
        <h3>Temperature</h3>
        <p>${data.current.temperature_2m}°F</p>
      `;
    })
    .catch(() => {
      result.innerHTML = "<p>Error loading temperature</p>";
    });
});

// ================= CONDITIONS =================
conditionBtn.addEventListener("click", function () {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=38.9&longitude=-77.0&current=temperature_2m,weathercode",
  )
    .then((r) => r.json())
    .then((data) => {
      const code = data.current.weathercode;

      let weatherText = "";

      if (code === 0) {
        weatherText = "☀️ Clear sky";
      } else if (code <= 3) {
        weatherText = "🌤 Partly cloudy";
      } else if (code <= 67) {
        weatherText = "🌧 Rainy";
      } else if (code <= 77) {
        weatherText = "❄️ Snowy";
      } else {
        weatherText = "🌫 Foggy";
      }

      result.innerHTML = `
        <h2>Washington, DC</h2>
        <h3>Weather Conditions</h3>
        <p>${weatherText}</p>
      `;
    })
    .catch(() => {
      result.innerHTML = "<p>Error loading weather</p>";
    });
});
