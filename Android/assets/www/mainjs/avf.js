/*

Howard Livingston
AVF with Jen Mccrrick
13/06
Android Javascript

*/


//Preparing the DOM

$("document").ready(function() {
    console.log( "The DOM is Ready!" );
    
   
   getWeather();
});

//Getting the device ready

document.addEventListener('deviceready', function() {
	console.log("The device is ready!");
	
});

//all functions fire onload

/*Jen McCarrick method...still receiving error code from Cordova from the console and won't display pics*/

 var screenOutput;

$(function() {
	var tag = "popular";
	var url = "https://api.instagram.com/v1/media/popular?callback=?&amp;client_id=99ec0bb747ce4b099f5c342470f9788c&amp;min_id=10";
  $.getJSON(url,screenOutput);
  });
 
  var screenOutput = function(info) {
  
  	alert("screenOutput");
  	console.log(info);
  	
  	$("#data-msg").html("<h2>Instagram results:</h2>");
  	$.each(info.data, function(index,photo) {
  	
  		var pic = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";
  				
  				$("#data-input").append(pic);
  				
  				});
  			};
  
//Get weather info

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



//Tried this method but it didn't work

/*var getInstagram = function (){
$(".apiInstagram").remove();
		var makeapiInstagram = $('<h2 class="apiInstagram">Instagram</h2>');
		apiInstagram.appendTo('#apiInstagram');
		console.log("procede to ajax!");
		$.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/media/popular?callback=?&amp;client_id=99ec0bb747ce4b099f5c342470f9788c&amp;min_id=10";
        success: function(data) {

            for (var i = 0; i < 6; i++) {
        $(".apiInstagram").appendTo("#apiInstagram");
        <a target='_blank' href='" + data.data[i].link +"'><img class='instagram-image' src='" + data.data[i].images.thumbnail.url +"' /></a></div>");   
                }     
                            
        }
    });
};

*/

//Page init functions
$('#home').on('pageinit', function(){
		console.log("Home page loaded!");
});

$('#research').on('pageinit', function(){
		console.log("Research page loaded!");
});

$('#environment').on('pageinit', function(){
		console.log("Environment page loaded!");
 });

$('#compassPage').on('pageinit', function(){
		console.log("api page loaded!");
});

$('#accPage').on('pageinit', function(){
		console.log("api page loaded!");
});

$('#geoPage').on('pageinit', function(){
		console.log("api page loaded!");
});

$('#apiPage').on('pageinit', function(){
		console.log("api page loaded!");
});

