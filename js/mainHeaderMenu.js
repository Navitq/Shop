


function init() {
	let pictureForChange = document.getElementById('barImg');
	pictureForChange.onclick = imgChanger;
	window.onresize = sizeshecker;
}

function imgChanger(){
	let pictureForChange = document.getElementById('mainNavMen');
	if(pictureForChange.getAttribute("class") === "mainNavigationMenu"){
		pictureForChange.setAttribute("class", "mainNavMenu");
	}
	else {
		pictureForChange.setAttribute("class", "mainNavigationMenu");
	}
}

function sizeshecker(){
	let pictureForChange = document.getElementById("mainNavMen");
	let fa_barsMenu = document.getElementById("fa-barsMenu");
	if(window.screen.width >= 767){
		pictureForChange.setAttribute("class", "mainNavigationMenu");
		fa_barsMenu.checked = false;
	} 
}


window.onload = init;