var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	for (var i = 0; i < weaponsArray.length; i++){
		var addWeapon = "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
		document.forms[0]["weapons"].innerHTML += addWeapon;
	}
	SelectWeapon()
}


function SelectWeapon()
{
	var selection = 0
	selection = document.forms[0]["weapons"].value
	document.getElementById('currentWeapon').innerText = weaponsArray[selection]
}
