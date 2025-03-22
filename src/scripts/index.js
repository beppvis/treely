

function Tree() {
    this.image = document.getElementById("tree1");
}



var tress = new Array()


function onLoad() {
    const visibleCaroselItems = document.getElementsByClassName("visibleCarouselItem");
}


function switchToMe(item) {

    if (!item.className.includes("visibleCarouselItem")) {
        const image_id = item.id + "Image"
        let image = document.getElementById(image_id)
        var images = document.getElementsByClassName("carouselImage")
        for (var img_ind in images) {
            var img = images.item(img_ind);
            if (img.id != image_id) {
                var next_image_src = String(img.src)
                img.src = image.src
                image.src = next_image_src
                var img_id = img.id
                img.id = image_id
                image.id = img_id

            }
        }
        var divs = document.getElementById("carouselItem").children;
        for (const div_id in divs) {
            var div = divs.item(div_id)
            if (div.id != item.id) {
                console.log(div)
                div.classList.remove("visibleCarouselItem")
            }
        }
        item.classList.add("visibleCarouselItem")

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
