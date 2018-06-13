window.onload = function(){
	var book = document.getElementsByClassName('body-inner');
	var header = document.getElementById("istex_web_header");
	var hauteur = header.offsetHeight;
	console.log(hauteur);
	book[0].onscroll = function() {ma_fonction()};
	function ma_fonction() {
	    if (book[0].scrollTop > 200) {
		header.style.opacity = 0;
		document.getElementById("istex_web_header").style.height = 0 + "px";
	    } else {
		header.style.opacity = 1;
		document.getElementById("istex_web_header").style.height = hauteur + "px";
	    }
	}
};
