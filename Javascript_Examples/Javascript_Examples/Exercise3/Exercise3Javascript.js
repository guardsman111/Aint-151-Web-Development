var isLightOn = 0;
function ToggleLight() {
	if (isLightOn == 1) {
		document.getElementById('lightBulb').src = "img/bulb-on.png";
	}
	if (isLightOn == 0) {
		document.getElementById('lightBulb').src = "img/bulb-off.png";
	}
}

function AddNumbers(x,y){
	var total = x + y;
	document.getElementById('numbers').innerText = total;
}
