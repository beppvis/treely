

function Tree() {
    this.image = document.getElementById("tree1");
}



var tress = new Array()

function addItem(item) {
    if (localStorage.getItem("activeUser") != null) {
        if (localStorage.getItem("cart") != null) {
            let cart = JSON.parse(localStorage.getItem("cart"))
            cart.push(item.className)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        else {
            let cart = new Array()
            cart.push(item.className)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }
    else {
        alert("You need to log in to cart an item!");
        window.location.href = "./logIn.html";
    }
}


function get_treeBarComponents(name) {
    return ` 
            <img id="tree1" src="../assets/BIG.jpg" style="display:block;margin-right:0;margin-left:0;border-radius:11px 11px 0px 0px" width="100%"
                height="320px">
            <h2>${name}</h2>
            <center>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend vel metus sed lacinia.
                Sed condimentum eleifend dolor eu semper. Fusce accumsan dolor nec enim lobortis faucibus.
                Pellentesque congue
            </center>
            <div class="displayButtons">
                <button onclick="addItem(this)" class="${name}">Cart</button>
                <button onclick="window.location.href='../src/treeData.html'">Plant</button>
            </div>
`

}




function onLoad() {
    const viewMoreComponents = `
                <a href="viewmore.html">
                    <img id="viewMore" src="../assets/arrow-right-circle.svg"
                        style="display:block;margin-right:0;margin-left:0;margin-top:144px;margin-bottom:89px ;border-radius:11px 11px 0px 0px"
                        width="225px" height="225px">
                    <h2>View More</h2>
                </a>
`
    var treeBar = document.getElementById("treeBar");
    var noOfbars = 10;

    for (let i = 0; i < noOfbars; i++) {
        if (i == noOfbars - 1) {
            var viewMoreBar = document.createElement("div");
            viewMoreBar.className = "viewMore";
            viewMoreBar.innerHTML = viewMoreComponents;
            treeBar.appendChild(viewMoreBar);
        }
        else {
            var treeDisplayBar = document.createElement("div");
            treeDisplayBar.className = "displayBar";
            treeDisplayBar.innerHTML = get_treeBarComponents("Oak Tree");
            treeBar.appendChild(treeDisplayBar);
        }
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
