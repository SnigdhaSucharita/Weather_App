let weather = {
    apikey: "ed9288cd4fc618dafe347dabf389e977",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apikey
        )
        .then((response) => {
            console.log(response);
            if(!response.ok) {
                alert("No Weather found.");
                throw new Error("NO Weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        console.log(data);
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " +  speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

var h = document.querySelector(".search-button")
    if(h) {
        h.addEventListener("click", function() {
            weather.search();
        });
    }


var g = document.querySelector(".search-bar")
    if(g) {
        g.addEventListener("keyup", function(event) {
            if(event.key == "Enter") {
                weather.search();
            }
        });
    }


weather.fetchWeather("Pune");