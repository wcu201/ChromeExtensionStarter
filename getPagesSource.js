// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.innerText;
            break;
        /*case Node.TEXT_NODE:
            html += node.nodeValue;
            break;*/
       /*case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;*/
        /*case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;*/
        /*case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;*/
        }
        node = node.nextSibling;
    }
/*var keyInfo;
    for(i = 0; i<html.length-4;i++)
    {
        if(html[i]== '<' && html[i+1]== 'p' && html[i+2]== '>')
        {
           var u=i+3; 
           While(html[u]!= '<' && html[u+1]!= '/' && html[u+2]!= 'p' && html[u+3]!='>')
           {
             keyInfo+=html[u];
             u++; 
           }
           keyInfo+='                                    '
        }
           
        
    }*/


    /*var keyInfo = html.slice(html.indexOf("<table"), html.indexOf("</table"));

    console.log(keyInfo);*/

    return html;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});