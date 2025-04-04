

function Tree() {
    this.image = document.getElementById("tree1");
}



var tress = new Array()


function onLoad() {
    const treeBarComponents = ` 
            <img id="tree1" src="../assets/BIG.jpg" style="display:block;border-radius:33px" width="354px"
                height="324px">
            <h2>Oak Tree</h2>
            <center>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend vel metus sed lacinia.
                Sed condimentum eleifend dolor eu semper. Fusce accumsan dolor nec enim lobortis faucibus.
                Pellentesque congue
            </center>
            <div class="displayButtons">
                <button>Cart</button>
                <button onclick="window.location.href='../src/treeData.html'">Plant</button>
            </div>
        `
    var treeBar = document.getElementById("treeBar");
<<<<<<< HEAD
    for (let i = 0; i < 3; i++) {
=======
    for (let i = 0; i < 10; i++) {
>>>>>>> 5b38486 (rebasing with main)
        var treeDisplayBar = document.createElement("div");
        treeDisplayBar.className = "displayBar";
        treeDisplayBar.innerHTML = treeBarComponents;
        treeBar.appendChild(treeDisplayBar);
    }
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
