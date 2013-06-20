/*

Howard Livingston
AVF with Jen Mccrrick
13/06
iOS Javascript
*/

//Getting the device ready

document.addEventListener('deviceready', function() {
	console.log("The device is ready!");
	
});


//Instagram
var screenOutput;

var json = $(function() {
	var tag = "popular";
	var url = "https://api.instagram.com/v1/media/popular?callback=?&amp;client_id=99ec0bb747ce4b099f5c342470f9788c&amp;min_id=10";
  $.getJSON(url,screenOutput);
  });
 
  var screenOutput = function(info) {
  
  	alert("screenOutput");
  	console.log(info);
  	
  	$("#data-msg").html("<h2>Instagram results:</h2>");
  	$.each(info.data, function(index,photo) {
  	
  		var pic = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username + ")</em></h4></li>";
  				
  				$(pic).appendTo("#data-input");
  				
  				});
  				
  			};
  
//Weather 

var i;
var l;
var getWeather;
var getWeather = function (){
	$(".weatherTitle").remove();
		var makeweatherTitle = $('<h2 class="weatherTitle">Weather</h2>');
		makeweatherTitle.appendTo('#weatherTitle');
		console.log("procede to ajax!");
			$.ajax({
				url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=Boston&format=json&num_of_days=5&key=ejp7mma79vtqbjsqak34xp4w&callback=getWeather',
				type: 'GET',
				dataType: 'JSONP',
				success: function (weatherData){
					console.log(weatherData);					
					for (i=0, l=weatherData.data.current_condition.length; i<l; i++){
						$('<ul class="weatherCity">' + '<li><h3>Boston, Ma</h3></li>' + '</ul>').appendTo('#weatherTitle');						
							$(' ' +
									'<ul class="weatherList">' +
										'<li> Current Condition: ' + weatherData.data.current_condition[i].weatherDesc[i].value + '</li>' +
										'<li> Temperature: ' + weatherData.data.current_condition[i].temp_F + 'F' + '</li>' +
										'<li> Humidity: ' + weatherData.data.current_condition[i].humidity + '%' + '</li>' +
										'<li> Precipitation: ' + weatherData.data.current_condition[i].precipMM + '"' + '</li>' +
										'<li> Barometric Pressure: ' + weatherData.data.current_condition[i].pressure + 'mb' + '</li>' +
										'<li> Cloud Cover: ' + weatherData.data.current_condition[i].cloudcover + '%' + '</li>' +
										'<li> Visibility: ' + weatherData.data.current_condition[i].visibility + 'miles' + '</li>' +
									'</ul>'
								).appendTo('#weatherTitle');
						}
					}

			});
			
};



//Accelerometer

var onSuccess;
var onError;
var acceleration;


function onDeviceReady() {
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    }

    // onSuccess: Get a snapshot of the current acceleration
    //

    
    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('What Happened? No Accelerometer!');
    }
   



//Compass


//Page init functions
$('#home').on('pageinit', function(){
		console.log("Home page loaded!");
});

$('#research').on('pageinit', function(){
		console.log("Research page loaded!");
});

$('#environment').on('pageinit', function(){

getWeather();
		console.log("Environment page loaded!");
 });

$('#compassPage').on('pageinit', function(){

/*getCompass();*/
		console.log("api page loaded!");
});

$('#accPage').on('pageinit', function(){


		console.log("api page loaded!");
});

$('#geoPage').on('pageinit', function(){

/*getGeo();*/
		console.log("api page loaded!");
});

$('#apiPage').on('pageinit', function(){


		console.log("api page loaded!");
});



