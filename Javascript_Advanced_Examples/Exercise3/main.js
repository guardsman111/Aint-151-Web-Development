var roomObject = {
	title:'room name',
	text:'you are standing in a room, there is a picture on the wall and a table',
	choices:['examine picture','examine table']
}


function OnLoad()
{
	document.getElementById('roomtitle').innerText = roomObject.title;
	document.getElementById('roomtext').innerText = roomObject.text;
	for (var i = 0; i < roomObject.choices.length; i++)
	{
		var choiceAdd = "<button type='button' value='" + i + "'>" + roomObject.choices[i] + "</option>";
		document.getElementById('roomchoices').innerHTML += choiceAdd
	}
}
