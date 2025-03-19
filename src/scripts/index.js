

function Tree() {
    this.image = document.getElementById("tree1");
}



var tress = new Array()


function onLoad() {
    console.log("hello")
}

function spawnCarouselTab(tree) {
    var parent = document.getElementById("carosel");
    var carouselBody = document.createElement("div");
    carouselBody.className = "displayBar";
    var image = tree.image.cloneNode();
    image.style = "display:block;border-radius:33px";
    carouselBody.appendChild(image);
    parent.appendChild(carouselBody);
}
