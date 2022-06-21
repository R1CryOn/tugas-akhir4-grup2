let input = document.querySelector(".input_text");
let main = document.querySelector("#name");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let wind = document.querySelector(".wind");
let clouds = document.querySelector(".clouds");
let button = document.querySelector(".submit");
let icon = document.getElementById("icon");
let apiKeys = "336df7ea7f6d9bcdfe4942ed3fbd40bd";

button.addEventListener("click", function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=" +
      apiKeys +
      "&units=metric"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let tempValue = data["main"]["temp"];
      let nameValue = data["name"];
      let descValue = data["weather"][0]["description"];
      let windValue = data["wind"]["speed"];
      let backgroundImage = data["weather"][0]["main"];
      let iconValue = data["weather"][0]["icon"];
      let iconHtml =
        "<img src='http://openweathermap.org/img/w/" + iconValue + ".png'>";

      main.innerHTML = "City : "+nameValue + iconHtml;
      desc.innerHTML = "Condition - " + descValue;
      temp.innerHTML = "Temperature - " + tempValue;
      wind.innerHTML = "Wind Speed - " + windValue + " km/h";

      if (backgroundImage == "Clouds") {
        document.body.style.backgroundImage = "url('img/Clouds.jpg')";
        document.body.style.backgroundSize = "100%";
      } else if (backgroundImage == "Clear") {
        document.body.style.backgroundImage = "url('img/Clear.jpg')";
        document.body.style.backgroundSize = "100%";
      } else if (backgroundImage == "Thunderstorm") {
        document.body.style.backgroundImage = "url('img/Thunderstorm.jpg')";
        document.body.style.backgroundSize = "100%";
      } else if (backgroundImage == "Drizzle") {
        document.body.style.backgroundImage = "url('img/Drizzle.jpg')";
        document.body.style.backgroundSize = "100%";
      } else if (backgroundImage == "Rain") {
        document.body.style.backgroundImage = "url('img/Rain.jpg')";
        document.body.style.backgroundSize = "100%";
      } else if (backgroundImage == "Snow") {
        document.body.style.backgroundImage = "url('img/Snow.jpg')";
        document.body.style.backgroundSize = "100%";
      } else {
        document.body.style.backgroundColor = "white";
      }

      input.value = "";
    })

    .catch((err) => alert("Wrong city name!"));
});
