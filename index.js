const apiKey = "dcbd692d555ad9c91ad4824639c49268";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
      
    
    else{

        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Image/black_cloud2.png"
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Image/clear2.png"
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Image/black_cloud_rain2.png"
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Image/sun_rain2.png"
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Image/mist2.png"
    }

    else if(data.weather[0].main == "Sunny"){
        weatherIcon.src = "Image/sun2.jpg"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }


    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
}
)

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});


checkWeather();