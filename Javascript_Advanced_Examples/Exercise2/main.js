
function StorePlayerData()
{
	name = document.forms[0]['playername'].value;
	health = document.forms[0]['playerhealth'].value;
	colour = document.forms[0]['playercolour'].colour;
	localStorage.setItem('playername',name);
	localStorage.setItem('playerhealth',health);
	localStorage.setItem('playercolour',colour);
}
