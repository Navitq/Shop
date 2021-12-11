


function init() {
	let pictureForChange = document.getElementById('barImg');
	pictureForChange.onclick = imgChanger;
}

function imgChanger(){
	let pictureForChange = document.getElementById('mainNavMen');
	if(pictureForChange.getAttribute("class") === "mainNavigationMenu"){
		console.log("CAS")
		pictureForChange.setAttribute("class", "crossImages");
	}
	else {
		pictureForChange.setAttribute("class", "mainNavigationMenu");
	}
}




window.onload = init;