// Event handler for user clicking the selectSearchCity button
$("#selectSearchCity").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the city name
    var inputcity = $("#weatherInput").val().trim();
    // Running the searchBandsInTown function(passing in the city as an argument)
    searchWheather(inputcity);  
    if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("city", "inputcity");
    console.log(localStorage);
    // Retrieve
    document.getElementById("selectSearchCity").innerHTML = localStorage.getItem("city");
    } else {
    document.getElementById("selectSearchCity").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    // Empty the contents of the city-div, append the new city content
      $("#cityDiv").empty();
}); 

function searchWheather(city) { 
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=b96e7e1ded82aa80685e6c10a625dfb9";  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
      // Printing the entire object to console
      console.log(response);
    
      // Constructing HTML containing the city information
        // Creating a div to hold the city
        var cityDiv = $("<div class='ciudad'>");
          // Storing the rating data
        
          var cityName = response.city.name;
          console.log(cityName);
          

          console.log(cityName);
          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("City: " + cityName);
          // Displaying the name of city
          cityDiv.append(pOne);
          // Storing the temperature
          var dateSearch= response.list[0].dt_txt;
          console.log(dateSearch);
          // Creating an element to hold 
          var parr = $("<p>").text("Date: " + dateSearch);
            cityDiv.append(parr);
    
            var parIcono= response.list[0].weather.icon;
            console.log(parIcono);
            var parIcono = $("<p>").text("Icono: " + parIcono);
             // <img src="http://openweathermap.org/img/w/${forecastDate.weather[0].icon}.png">
          // Displaying the name of city
          cityDiv.append(parIcono);
          // Storing the temperature
            
          
    
          var tempG = response.list[0].main.temp;
          console.log(tempG);
          // Creating an element to hold the release year
          var pTwo = $("<p>").text("Temp: " + tempG);
          // Displaying the release year
    
    
          cityDiv.append(pTwo);
    
    
         // Storing the release year
        var tempG= response.list[0].wind.speed;
          console.log(tempG);
          // Creating an element to hold the release year
          var parr3 = $("<p>").text("Wind Speed: " + tempG);
            cityDiv.append(parr3);
    
        // Storing the humidity
            var humid= response.list[0].main.humidity;
          console.log(humid);
          // Creating an element to hold 
          var parr4 = $("<p>").text("Humidity: " + humid);
            cityDiv.append(parr4);
    
            var cityLat = response.city.coord.lat;
            console.log(cityLat);
          var cityLong = response.city.coord.lon;
          console.log(cityLong );
            
          
          // Creating an element to hold 
          
/*
          let ndice = getUv(cityLat,cityLong);
          console.log(ndice);
          var parr5 = $("<p>").text("UV Index: " + ndice);
            cityDiv.append(parr5);
*/    
            var forecas ="Forecast next 5 day";
            var titFo = $("<h1>").text(forecas);
             // Displaying the name of city
            cityDiv.append(titFo);
    
            for(var k=8; k <41; k++){    
            var dayforecast= response.list[k].dt_txt;
            var tempf= response.list[k].main.temp;
            var windGf= response.list[k].wind.speed;
            var humidf= response.list[k].main.humidity;
            var parrf= $("<li>").text("Date:" + dayforecast+" "+"Temp:"+tempf+"ºF " +"Wind: "+ windGf+"mph"+" Humid:"+humidf+"%");
            k= k+8;
            cityDiv.append(parrf);
            }
    // Storing the humidity
          $("#cityDiv").prepend(cityDiv);
      //$("#cityDiv").append(cityURL, cityImage, trackerCount, upcomingEvents, goTocity);    
    });
}
    ///////////Calc UV 
    
    
    //////
    
    
    
    /////// calc the UV index
    /*
    function getUv(cityLat,cityLong) {
     var latitud = cityLat;
     var longitud= cityLong;
     var urlUv ="http://api.openweathermap.org/data/2.5/uvi?lat="+latitud+"&lon="+longitud+"&appid=b96e7e1ded82aa80685e6c10a625dfb9";
     var x ;
    
        $.ajax({
            url: urlUv,
            method: "GET"
        }).then(function(responseUv){
          var uvIn= responseUv.value;
          
          // Creating an element to hold 
          var x = uvIn;
          console.log("Inside function UV Value"+x);  
        });
        
        return x;      
    }
    */
    