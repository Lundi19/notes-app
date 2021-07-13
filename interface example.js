document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.energyUsage();
  }
    const thermostat = new Thermostat();
    updateTemperature();
    document.querySelector('#temperature-up').addEventListener('click', () => {
      thermostat.increaseTemp();
      updateTemperature();
    });
    document.querySelector('#temperature-down').addEventListener('click', () => {
      thermostat.decreaseTemp();
      updateTemperature();
    });
    document.querySelector('#temperature-reset').addEventListener('click', () => {
      thermostat.resetTemp();
      updateTemperature();
    });
    document.querySelector('#powersave-on').addEventListener('click', () => {
      thermostat.switchPowerSaveOn();
      document.querySelector('#power-saving-status').innerText = 'on';
      updateTemperature();
    })
    document.querySelector('#powersave-off').addEventListener('click', () => {
      thermostat.switchPowerSaveOff();
      document.querySelector('#power-saving-status').innerText = 'off';
      updateTemperature();
    })
    const selectElement = document.querySelector('#current-city');
    selectElement.addEventListener('change', (event) => {
      const city = event.target.value;
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          document.querySelector('#current-temperature').innerText = data.main.temp;
        })
    });
  document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;
    displayWeather(city);
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          document.querySelector('#current-temperature').innerText = data.main.temp;
        })
    })
    const displayWeather = (city) => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          document.querySelector('#current-temperature').innerText = data.main.temp;
        })
    }
});