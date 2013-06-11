/*

Howard Livingston
AVF with Jen Mccrrick
13/05


*/


//Preparing the DOM

$("document").ready(function() {
    console.log( "The DOM is Ready!" );
    
    getTwitter();
    getWeather();
});

//Getting the device ready

document.addEventListener('deviceready', function() {
	console.log("The device is ready!");
	
});


//Getting Twitter info


//Declaring variables for unknowns
var i;
var l;

//Get The twitter feed function
var getTwitter = function (){
	$(".apiTweetList").remove();
	var maketwitterHeader = $('<h2 class="apiTweetList">Blue Man Group</h2>');
	maketwitterHeader.appendTo('#apiTweetList');
//Ajax call
	$.ajax({
		url: 'http://search.twitter.com/search.json?q="%20bluemanGroup%20"&result_type=mixed&callback=?',
		type: 'GET',
		dataType: 'jsonp',
		success: function (tdata){
			console.log(tdata);
				//establish currentTweet variable
				var currentTweets = $();
				//Tell it to we want to attach the list of tweets
				currentTweets.appendTo('#apiTweetList');
				//Loop through the tweets reauested
				for (i=0, l=tdata.results.length; i<l; i++){
				//Create the framework for the list where we'll populate the twitter data	
					$(' ' +
						'<ul class="apiTweetList">' +
							'<li><h3>' + tdata.results[i].from_user + ' ' + '</h3></li>' +
							'<li>' + tdata.results[i].from_user_name + ' ' + '</li>' +
							'<li>' + tdata.results[i].text + ' ' + '</li>' +
							'</ul>'
						).appendTo('#apiTweetList');
				}	
		}
	});
};


//Get weather info---same structure as above

var getWeather = function (){
	$(".weatherTitle").remove();
		var makeweatherTitle = $('<h2 class="weatherTitle">Weather</h2>');
		makeweatherTitle.appendTo('#weatherTitle');
		console.log("procede to ajax!");
			$.ajax({
				url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=Boston&format=json&num_of_days=5&key=ugp5sknf56rtzf69nt5p59rx',
				type: 'GET',
				dataType: 'jsonp',
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

$('#apiPage').on('pageinit', function(){
		console.log("api page loaded!");
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




