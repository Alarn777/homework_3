

//
// var newObj = document.createElement("h1");
// var formObj = document.getElementById("frm");   // father reference is saved to the variable
// formObj.appendChild(newObj);   // add the son as the last son of the father
// newObj.className = "msg";  //add class to the object created
//


//dynamic adding images to blank html file
var ows = " oooo";
function  cube() {
    var newCube = document.createElement('div');

    var fatherObj = document.getElementById("addingPlace");   // father reference is saved to the variable
    fatherObj.appendChild(newCube);   // add the son as the last son of the father
    newCube.className = "cube_new" + ows;
    ows += "o";
    var opacity = 0.1 * Math.floor((Math.random() * 10) + 1);
    newCube.style.opacity = opacity.toString();

}



