$(document).ready( function() {
	var userInput, wikiUrl;

	$('#search').on('click', function(event) {
		event.preventDefault();

		userInput = encodeURIComponent($('#userInput').val());
		console.log(userInput); 
		wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + userInput + '&format=json&callback=?';
		console.log(wikiUrl);

		$.ajax({
			type: "GET",
			url: wikiUrl,
			async: false,
			dataType: "json",
			success: function(data) {
				console.log(data);
				$('.results').html('');

				for (var i = 0; i < data[1].length; i++) {
					$('#results').append("<li><a href=" + data[3][i] +" target='_blank'>" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
				}
			}, //end success
			error: function(err){
				'<p>' + error + '</p>';
			}
		}); //AJAX call

	});
});

$('.random-btn').on('click', function(event) {
	event.preventDefault();
	window.open('https://en.wikipedia.org/wiki/Special:Random');
});

$("#mari").on('click', function(event) {
	event.preventDefault();
	window.open("https://twitter.com/mnhoffmann");
});