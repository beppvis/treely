


function makeBig(element) {
    if (element != undefined) {
        console.log("changing height");
        element.style.transform = "scale(1.3)";
        element.style.backgroundColor = "rgba(103, 163, 83, 0.4)";
        element.style.outline = "1px solid black";

    }
    else
        console.log("undefined element");
}
function makeDefault(element) {
    if (element != undefined) {
        console.log("changing height");
        element.style.transform = "scale(1)";
        element.style.backgroundColor = "rgba(154 ,163 ,159,0.1)";
        element.style.outline = "";

    }
    else
        console.log("undefined element");
}


