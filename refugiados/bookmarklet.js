(function(){

	var fixElement = function(elem){
		var childs = elem.childNodes;
		if(childs.length < 2000){
			for(var i = 0, max = childs.length; i < max; i++){
				var child = childs[i];
				if (child.nodeType == 3 && !child.nodeValue.match(/(not refugee)/gi)) {
					if(child.nodeValue.match(/(refugiados)/i)){
						child.nodeValue = child.nodeValue.replace(/(refugiados)/i, "Seres Humanos");
					}
					if(child.nodeValue.match(/(refugiado)/i)){
						child.nodeValue = child.nodeValue.replace(/(refugiado)/i, "Ser Humano");
					}
					if(child.nodeValue.match(/(refugee)/i)){
						child.nodeValue = child.nodeValue.replace(/(refugee)/i, "Human Being");
					}
					if(child.nodeValue.match(/(flüchtlinge)/i)){
						child.nodeValue = child.nodeValue.replace(/(flüchtlinge)/i, "Menschliches Wesen");
					}
					if(child.nodeValue.match(/(flüchtling)/i)){
						child.nodeValue = child.nodeValue.replace(/(flüchtling)/i, "Menschliche Wesen");
					}
					if(child.nodeValue.match(/(réfugiés)/i)){
						child.nodeValue = child.nodeValue.replace(/(réfugiés)/i, "Êtres Humains");
					}
					if(child.nodeValue.match(/(réfugié)/i)){
						child.nodeValue = child.nodeValue.replace(/(réfugié)/i, "Être Humain");
					}
					if(child.nodeValue.match(/(vluchteling)/i)){
						child.nodeValue = child.nodeValue.replace(/(vluchteling)/i, "Mens");
					}
					if(child.nodeValue.match(/(vluchtelingen)/i)){
						child.nodeValue = child.nodeValue.replace(/(vluchtelingen)/i, "Mensen");
					}
				}
				if(child.childNodes.length > 0 && child.tagName !== "SCRIPT" && child.tagName !== "STYLE"){
					fixElement(child);
				}
			}
		}
	}

	var fixWords = function(){

		if (!document.title.match(/(not refugee)/gi)) {
			var head = document.getElementsByTagName("head")[0];
			var body = document.getElementsByTagName("body")[0];

			fixElement(head);
			fixElement(body);
		}
	}

	document.onreadystatechange = function(){
	    if (document.readyState === 'complete') fixWords();
	}
	window.onload = fixWords;
	
})();