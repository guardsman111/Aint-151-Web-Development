function OnLoad()
{
	document.getElementById('roomTitle').innerText = roomArray[0].title;
	document.getElementById('roomText').innerText = roomArray[0].text;
	for (var i = 0; i < roomArray[0].choices.length; i++)
	{
		var choiceAdd = "<button type='button' onClick='SelectRoom(" + roomArray[0].choices[i].index + ")'>" + roomArray[0].choices[i].text + "</option>";
		document.getElementById('roomChoices').innerHTML = choiceAdd;
	}
}

function SelectRoom(roomIndex)
{
	var index = roomIndex;
	document.getElementById('roomTitle').innerText = roomArray[index].title;
	document.getElementById('roomText').innerText = roomArray[index].text;
	document.getElementById('roomChoices').innerHTML = '';
	for (var i = 0; i < roomArray[index].choices.length; i++)
	{
		var choiceAdd = "<button type='button' onClick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</option>";
		document.getElementById('roomChoices').innerHTML += choiceAdd;
	}
}
