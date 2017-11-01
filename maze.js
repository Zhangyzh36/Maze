window.onload = function() {
	var initial = false;
	var cheat = false;

	function updatedelay(message) {
		var text = document.getElementById("notification_field");
		if (message != "")
		{
			text.textContent = message;
			text.className = "black";
		}
	}
	
	function update(message) {
		var text = document.getElementById("notification_field");
		
		if (text.textContent != "")
			text.className = "white";
		
		setTimeout(updatedelay, 250, message);
		
	}

	var start = document.getElementById("start");
	start.onmouseover = function() {
		update("");
		initial = true;
		cheat = false;
	}

	var end = document.getElementById("end");
	end.onmouseover = function() {
		if (initial)
			update("You win");
		if (!initial || cheat)
			update("Don't cheat,you should start from the 'S' and move to the 'E' inside the Maze!");
	}
	end.onmouseout = function () {
		initial = false;
	}

	var maze = document.getElementById("maze_field");
	maze.onmouseleave = function() {
		if (initial)
			cheat = true;
	}

	var walls = document.getElementsByClassName("wall");
	for (var i = 0; i < walls.length; ++i)
	{
			walls[i].onmouseover = function(event) {
				if (initial)
				{
					event.target.className = "redwall";
					update("You Lose");
					
				}

			}
			walls[i].onmouseout = function(event) {
				event.target.className = "wall";
				initial = false;
			}
	}
	
}