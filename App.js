var input = document.querySelector('.input_text');
var nameElement = document.querySelector('#name');
var tempElement = document.querySelector('.temp');
var humidityElement = document.querySelector('.humidity');
var windElement = document.querySelector('.wind');
var cloudsElement = document.querySelector('.clouds');
var descElement = document.querySelector('.desc');
var button = document.querySelector('.submit');

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=a25779abbe7380e2eb32496a47fe8b85')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var tempCelsius = tempValue - 273.15; 
            var humidityValue = data['main']['humidity'];
            var windSpeed = data['wind']['speed'];
            var cloudsValue = data['clouds']['all'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];

            nameElement.innerHTML = nameValue;
            descElement.innerHTML = "Description: " + descValue;
            tempElement.innerHTML = "Temperature: " + tempCelsius.toFixed(2) + "°C"; 
            humidityElement.innerHTML = "Humidity: " + humidityValue + "%";
            windElement.innerHTML = "Wind Speed: " + windSpeed + " m/s";
            cloudsElement.innerHTML = "Cloudiness: " + cloudsValue + "%";
            input.value = "";
        })
        .catch(err => {
            console.error(err);
            alert("Error fetching weather data. Please try again.");
        });
});
