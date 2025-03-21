

function Tree() {
    this.image = document.getElementById("tree1");
}



var tress = new Array()


function onLoad() {
    const visibleCaroselItems = document.getElementsByClassName("visibleCarouselItem");
}


function switchToMe(item) {
    let parent = item.parentNode;
    let parentClassName = item.parentNode.className;
    if (!parentClassName.includes("visibleCarouselItem ")) {
        this.style = "animation:switchIn 0.5s;";
        console.log(parent.style)
    }

}

function spawnCarouselTab(tree) {
    var parent = document.getElementById("carosel").getRootNode().getAttributes();
    var carouselBody = document.createElement("div");
    carouselBody.className = "displayBar";
    var image = tree.image.cloneNode();
    image.style = "display:block;border-radius:33px";
    carouselBody.appendChild(image);
    parent.appendChild(carouselBody);
}
