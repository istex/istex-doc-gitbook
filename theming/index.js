window.onload = function(){
	// Call allow to have the transition for 
	// the first consult	
	callback();

	var targetNode = document.body;

	// Options of the observer
	var config = { attributes: true, childList: true };
	
	var observer = new MutationObserver(callback);
	
	observer.observe(targetNode, config);
	
};

function callback(){
	
	var book = document.getElementsByClassName('body-inner');
	var header = document.getElementById("istex_web_header");
	var hauteur = header.offsetHeight;
	book[0].onscroll = ma_fonction;
	function ma_fonction(e) {
	    if (book[0].scrollTop > 200) {
		header.style.opacity = 0;
		document.getElementById("istex_web_header").style.height = 0 + "px";
	    } else {
		header.style.opacity = 1;
		document.getElementById("istex_web_header").style.height = hauteur + "px";
	    }
	}

}
