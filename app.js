
$.getJSON('topspots.json', function(topSpot) {
	
	$.each(topSpot, function(i, topSpot) {
		var $topSpot = topSpot;
		var $topLink = topSpot.location;
		var $topLink=('<a href="https://www.google.com/maps?q='+$topLink+'"class="button">Open In Google Maps</a>' );
		var $table = ('<tr class="row"> <td>' + topSpot.name + '</td><td>'+ topSpot.description +
					 '</td><td>' + $topLink + '</td></tr>');
		$('#table-body').append($table);
	});
	
});
