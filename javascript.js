
//XML file
var XMLurl = "books.xml";

document.addEventListener("DOMContentLoaded", () => {

//fetch XML file
fetch(XMLurl).then(response => response.text())
.then(data => {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(data, "application/xml");
    console.log(xmlDoc);
    showXML(xmlDoc);
});


function showXML(xmlDoc) {
    //title first book
    var x = xmlDoc.getElementsByTagName("title")[0].childNodes[0];
    document.getElementById("test").innerHTML = x.nodeValue;
    // first book before btn function
    console.log(xmlDoc.getElementsByTagName("book")[0]);

    document.getElementById("buttonClick").addEventListener("click", function() {
        btn(x, xmlDoc);
      });
}


function btn(x, xmlDoc) {
    // add data in title
    x.insertData(0,"Cooking: ");
    
    // or change all data in title 
    // x.nodeValue = "changed text";

    document.getElementById("test").innerHTML = x.nodeValue;

    // create new element
    newEle = xmlDoc.createElement("edition");
    xmlDoc.getElementsByTagName("book")[0].appendChild(newEle);
    console.log(xmlDoc.getElementsByTagName("book")[0]);

    // insert data in new element
    // hoe in "edition" geraken???
    var i = xmlDoc.getElementsByTagName("edition")[0];
    console.log(i);
    i.nodeValue = "Gave value to edition";
    console.log(i.firstChild.nodeValue);
}

});