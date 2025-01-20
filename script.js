const APIKey = "8dab130e888a9d1410405dd0aa2da08d";
const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(APIUrl + city + `&appid=${APIKey}&`);
    
    if(response.statusCode == 404) {
       document.querySelector(".error-msg").style.display = "block";
       document.querySelector(".weather").style.display = "none";
    }
    
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temparature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather();
