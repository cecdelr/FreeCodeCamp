window.onload = function(){
    //default temp is Celsius
    var isCelsius = true;
    var temp = 0;

    //Geolocation API
    var locationAPI = "http://ip-api.com/json";

    $.getJSON(locationAPI, function(data){
      var lat = data.lat;
      var long = data.lon;

      var URL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=ebce7addd9ed9c3fd7518f76f3cf92d0";
      console.log(URL);
      $.getJSON(URL, function(data){
        var weatherImg = data.weather[0].icon;
        $("#icon").append("<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217538/"+ weatherImg + ".png'>");

        temp = Math.round(data.main.temp - 273.15); //default is celsius
        $("#city").text("City: " + data.name);
        $("#description").text("Description: " +data.weather[0].main);
        $("#temp").text("Temperature: " + temp + "°C");

      });  

    });

    //change to fahrenheit
    var fButton = document.getElementById("fButton");
    fButton.addEventListener("click", function(){
      if(isCelsius){
        temp = Math.round((temp * 1.8) + 32);
        $("#temp").text("Temperature: "+ temp + "°F");
        isCelsius = !isCelsius;
      }
    });

    var cButton = document.getElementById("cButton");
    cButton.addEventListener("click", function(){
      if(!isCelsius){
        temp = Math.round((temp - 32) / 1.8);
        $("#temp").text("Temperature: "+ temp + "°C");
        isCelsius = !isCelsius;
      }
    });
}