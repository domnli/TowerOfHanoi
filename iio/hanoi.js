/*hanoi main file*/
hanoi = function(io){
	var config = {
		ltx:0,
		lty:0,
		grid:{
			cellW:30,
			cellH:30,
			col:7,
			row:10
		},
	};
	//cal config
	//...

	//background
	io.setBGColor('rgba(0, 186, 255, 0.4)');
	//grid
	var grid = new iio.Grid(config.ltx,config.lty,config.grid.col,config.grid.row,config.grid.cellW,config.grid.cellH);

	io.addObj(grid.setStrokeStyle('white'));
}