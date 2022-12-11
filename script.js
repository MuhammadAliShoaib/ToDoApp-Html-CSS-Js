var mainList = document.getElementById('mainList');
var input = document.getElementById('input');

function addElem() {
    var text = input.value;
    input.value="";

    //creating an element(tag)
    var a = document.createElement("LI");

    // Create a button tag
    var button = document.createElement("BUTTON");
    var edit = document.createElement("BUTTON");

    //creating a text Node following DOM's concept
    var b = document.createTextNode(text);

    // create a text node of Delete
    var c = document.createTextNode("Delete");
    var d = document.createTextNode("Edit");

    //b being the child of a is appended 
    // inner html could also be used but it will overwrite rather than appending
    a.appendChild(b);

    // add text of Delete into delete button tag
    button.appendChild(c);
    edit.appendChild(d);

    // button added in LI
    a.appendChild(button);
    a.appendChild(edit);

    mainList.appendChild(a);

    button.setAttribute("class","deleteBtn");
    button.setAttribute("onclick","deleteClick(this)");

    edit.setAttribute("class","editBtn");
    edit.setAttribute("onclick","editClick(this)");
}

function deleteClick(element){
    // element is the current button tag
    // button tag's parent is LI
    // li is removed
    element.parentNode.remove();
}

function editClick(element){
    //element is the current button tag
    //edit's parent is LI
    // LI's first child is the text inside it
    // since text is addded through a node so node value is changed
    element.parentNode.firstChild.nodeValue = prompt();
}

function deleteAll(){
    mainList.innerHTML="";
}
