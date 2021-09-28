
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  var city = document.getElementById("city-input").value;
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast


  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      // Modifier le DOM
      
      for(let i=0; i<4; i++){
        document.getElementById(i.toString().concat('-today-forecast-main')).innerHTML = data.list[i].weather[0].main;
        document.getElementById(i.toString().concat('-today-forecast-more-info')).innerHTML = data.list[i].weather[0].description;
        document.getElementById(i.toString().concat('-icon-weather-container')).innerHTML = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
        document.getElementById(i.toString().concat('-today-forecast-temp')).innerHTML = `${data.list[i].temp.day}°C`;
      }
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
