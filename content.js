(function() {
window.stop();

var xhr = new XMLHttpRequest();
xhr.open('GET', window.location.href, true);
xhr.responseType = 'document';
xhr.onload = function () {
   
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
			
		   var htmlcode = xhr.responseXML;
			var removeAll = function(what) {
				[].forEach.call(
					htmlcode.querySelectorAll(what),
					function(x) { x.parentNode.removeChild(x); }
				);
			}

		    removeAll("script");
			removeAll("link");
		    removeAll('ins');
			removeAll('.header');
			removeAll('.footer');
			removeAll('.footermenu');
			removeAll('#localidad1');
			removeAll('.sidebar-container');
			removeAll('.adsbygoogle');
			removeAll('p:empty');
			removeAll('center:empty');
			removeAll('a[href*="mage.si"]');
			removeAll('#commentform');
			removeAll('.trackbacks + .trackbacks');
			removeAll('.trackbacks + h3');
			removeAll('.trackbacks');
			removeAll('#respond + div');
			removeAll('#respond');

			removeAll('h2:empty + h2:empty');
			removeAll('h2:empty + center:empty');
			removeAll('center:empty + h2:empty');
			removeAll('.content + h2:empty');			
			removeAll('.content > .left + br');
			removeAll('.content > .left + br');
			removeAll('.content > .left + h2');
			removeAll('.content > center');
			removeAll('.content > h3');
			
			removeAll('.menu > h3');
			removeAll('.menu > center');
			
			//var x = htmlcode.querySelectorAll("div.inner > div.content2 > div.menu > div.content")[0];
			var x = htmlcode.querySelectorAll("div.inner")[0];
		    if(x !== null) {
			    var body = htmlcode.getElementsByTagName('body')[0];
				x.parentNode.removeChild(x);
				x.style.backgroundColor = "white";
				body.innerHTML = '';
				body.appendChild(x);
			}
			
			document.title = htmlcode.title;
			document.documentElement.innerHTML = htmlcode.documentElement.innerHTML;

			[].forEach.call(
					document.querySelectorAll('a[href*="beelink"]'),
					function(link) { 
						
						var xh2 = new XMLHttpRequest();
						xh2.open('GET', link.href, true);
						xh2.responseType = 'document';
						xh2.onload = function () {
						   	if (xh2.readyState === xhr.DONE && xhr.status === 200) {

								var parent = link.parentNode.parentNode;
								parent.innerHTML = "";
								
								var lnx = xh2.responseXML.querySelectorAll("div.tab_content > blockquote")[0];
								var node = document.importNode(lnx, true);
								parent.appendChild(node);
							}
						};
						xh2.send();
					}
		     );
	}
}
xhr.send();
})();