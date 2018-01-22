function DOCtoString(document_root)
{
  var HTMLstring = "",
      node = document_root.firstChild;
  while(node)
  {
      switch (node.nodeType) {
      	case Node.ELEMENT_NODE:
      	HTMLstring += node.innerText;
        
      	break;
      }
      node = node.nextSibling;
  }





var importantVals;





  return HTMLstring;

}

chrome.runtime.sendMessage({
	action: "getSource",
	source: DOCtoString(document)
});


function getNumbers(string)

{
  for(int i = 0;i<string.)
  return string+2;
}

/*function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.innerText;
            break;
  
        }
        node = node.nextSibling;
    }

    return html;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});*/