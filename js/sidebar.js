function toggleSideBar(){
	document.getElementById("sidebar").classList.toggle('active');
}

function Check(){
	var x = 'Connectivity: ' + navigator.onLine;
	document.getElementById("dem").innerHTML = x;
}