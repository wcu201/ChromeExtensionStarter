
chrome.tabs.getSelected(null, function(tab) {
    var tablink = tab.url;

    document.write(tablink);

    //document.write('//n ' + document.first_child.nodeValue);


	function printText()
	{
		var codedText = '',
		node = document.first_child;

		while(node)
		{
			if(node == Node.TEXT_NODE)
				codedText += ("**"+node.nodeValue)
			node = node.nextSibling;
		}

		document.write(codedText);
	}

	printText();

    /*document.getElementById('tester').innerHTML = tablink + " this a tester";*/


});




/*chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript(null, {
		code: "document.body.style.background = 'red'"	
	});
});*/

	chrome.tabs.executeScript(null, {
		code: "document.body.style.background = 'purple'"	
	});

	function printText()
	{
		var codedText = '',
		node = document.first_child;

		while(node)
		{
			if(node == Node.TEXT_NODE)
				codedText += ("**"+node.nodeValue)
			node = node.nextSibling;
		}

		document.write(codedText);
	}

	printText();
//window.onload = function(tab) {alert(location.hostname);} 