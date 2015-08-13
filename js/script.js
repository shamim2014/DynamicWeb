function onClick()
{
	document.getElementById("country").style.display = "block";
	alert("fired");
}

function onClickTableRead(e){
	//var table = document.getElementById("country");
	var table = e;
	var rowLength = table.rows.length;
	
	for(i = 0; i<rowLength; i++){
		var oCells = table.rows.item(i).cells;
		var cellLength = oCells.length;
		for(j=0; j<cellLength ; j++){
			alert(oCells.item(j).innerHTML);
		}
	}
}