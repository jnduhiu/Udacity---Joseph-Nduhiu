function makeGrid() {
	// Define grid size
	
	var canvas, height, width, rows, cell;
	
	canvas = $('#pixel_canvas');
	height = $('#input_height').val();
	width = $('#input_width').val();
	
	canvas.children().remove()
	
	for (r = 0; r < height; r++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (c = 0; c < width; c++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	// When cell is clicked, change colour
	cell.click(function() {
		// Select colour
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// Submit Grid size to call makeGrid function
var submitGridSize;

submitGridSize = $('input[type="submit"]')

submitGridSize.click(function(event) {
  event.preventDefault();
  makeGrid();
});