function Tree() {
    this.image = document.getElementById("tree1");
}


function donate() {
    alert("Thanks fo the donation")
}

function addItem(item) {
    if (localStorage.getItem("activeUser") != null) {
        if (localStorage.getItem("cart") != null) {
            let cart = JSON.parse(localStorage.getItem("cart"))
            if (cart[item.className] != null)
                cart[item.className] += 1
            else
                cart[item.className] = 1
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        else {
            let cart = {}
            cart[item.className] = 1
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        alert("Successfully carted Item");
    }
    else {
        alert("You need to log in to cart an item!");
        window.location.href = "./logIn.html";
    }
}


function plant(tree) {
    localStorage.setItem("treeSelected", tree)
    window.location.href = "../src/treeData.html"
}

function getTreeBarComponents(name, img_path, description, longDescription) {
    return `
<img id="tree1" src="${img_path}" style="display:block;margin-right:0;margin-left:0;border-radius:11px 11px 0px 0px" width="100%"
                height="320px">
            <h2>${name}</h2>
            <center>
                ${description}
            </center>
            <div class="displayButtons">
                <button onclick="addItem(this)" class="${name}">Cart</button>
                <button onclick="plant('${name}')">Plant</button>
            </div>
`

}


function loggedIn() {
    if (localStorage.getItem("activeUser") != null)
        document.getElementById("profilePic").classList.add("active")
    else
        return false
}

async function onLoad() {

    loggedIn()

    const viewMoreComponents = `
                <a href="viewmore.html">
                    <img id="viewMore" src="../assets/arrow-right-circle.svg"
                        style="display:block;margin-right:0;margin-left:0;margin-top:144px;margin-bottom:89px ;border-radius:11px 11px 0px 0px"
                        width="225px" height="225px">
                    <h2>View More</h2>
                </a>
`
    var treeBar = document.getElementById("treeBar");
    let treesArray = new Array();

    let trees = await fetch('./scripts/data/trees.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.trees.forEach(data => { treesArray.push(data) })
        })
        .catch(error => console.log(error));

    const noOftimes = 6
    for (let tree_index = 0; tree_index < noOftimes; tree_index++) {
        var tree = treesArray[tree_index]
        var treeDisplayBar = document.createElement("div");
        treeDisplayBar.className = "displayBar";
        treeDisplayBar.innerHTML = getTreeBarComponents(tree["name"], tree["filePath"], tree["description"], tree["description-long"]);
        treeBar.appendChild(treeDisplayBar);
    }
    var viewMoreBar = document.createElement("div");
    viewMoreBar.className = "viewMore";
    viewMoreBar.innerHTML = viewMoreComponents;
    treeBar.appendChild(viewMoreBar);

}

window.onscroll = function() { scrolling() }
function scrolling() {
    let aboutUsPanel = document.getElementById("aboutUsPanel")
    let aboutUsContent = document.getElementById("aboutUsContent")
    if (document.documentElement.scrollTop >= 1604 + aboutUsPanel.scrollHeight || document.body.scrollTop >= 1604 + aboutUsPanel.scrollHeight) {
        aboutUsContent.classList.add("appearFromBelow")
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
