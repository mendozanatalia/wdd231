const current = document.querySelector('#current-weather');
const forecast = document.querySelector('#weather-forecast');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const key = "8c98891a028e10e5f586022bdca01406";
const lat = "-17.39";
const lon = "-66.15";

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

async function apiFetch1() {
    try {
        const response = await fetch(currentURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetch2() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeatherForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.innerHTML = data.weather[0].description;
    weatherIcon.setAttribute('alt', data.weather[0].description);
    
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    current.innerHTML = `
        <p><strong>${data.main.temp} °C</strong></p>
        <p><strong>High: </strong>${data.main.temp_max} °C</p>
        <p><strong>Low: </strong>${data.main.temp_min} °C</p>
        <p><strong>Humidity: </strong>${data.main.humidity} %</p>
        <p><strong>Sunrise: </strong>${sunrise}</p>
        <p><strong>Sunset: </strong>${sunset}</p>
    `;
}

function displayWeatherForecast(data) {
    const forecastItems = data.list
        .filter(item => item.dt_txt.includes("12:00:00"))
        .slice(0, 5)
        .map(item => `<p><strong>${new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: 'long' })}:</strong> ${item.main.temp.toFixed(1)} °C</p>`)
        .join('');

    forecast.innerHTML = `
        <h2>Weather Forecast</h2>
        <div class="info-vertical">
            ${forecastItems}
        </div>
    `;
}

apiFetch1();
apiFetch2();