

async function onLoad() {
    let img = document.getElementById("imageDisp")
    let infoPanel = document.getElementById("infoPanel")
    let treeNameCont = document.getElementById("treeName")
    let treesArray = new Array();
    let trees = await fetch('./scripts/data/trees.json')
        .then(response => response.json())
        .then(data => {
            data.trees.forEach(data => { treesArray.push(data) })
        })
        .catch(error => console.log(error));
    let selectedTree = localStorage.getItem("treeSelected")
    let data;

    if (selectedTree != null) {
        for (tree_index in treesArray) {
            if (treesArray[tree_index]["name"] == selectedTree) {
                data = treesArray[tree_index]
            }
        }
        img.src = data["filePath"]
        infoPanel.innerHTML = data["description-long"]
        treeNameCont.innerHTML = data["name"]


    }
}

function cart() {
    let selectedTree = localStorage.getItem("treeSelected")
    let slider = document.getElementById("treeNoSlider");
    let sliderValue = parseInt(document.getElementById("treeNoSlider").value);
    if (selectedTree != null) {
        var cart = localStorage.getItem("cart")
        if (cart != null) {
            cart = JSON.parse(cart)
            if (cart[selectedTree] != null)
                cart[selectedTree] = parseInt(cart[selectedTree]) + sliderValue
            else
                cart[selectedTree] = sliderValue
        }
        else {
            cart = {};
            cart[selectedTree] = sliderValue
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("Added to cart")
        slider.value = 0;
        window.location.reload();

    }
}

function drawTrees(slider) {
    console.log(slider)
    var noTrees = slider.value;
    var treeImg = document.getElementById("forrestTreeImage");
    var treeCount = document.getElementById("treeCount");
    treeCount.innerText = slider.value;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < noTrees; i++) {
        ctx.beginPath();
        if (i == 0) {
            ctx.drawImage(treeImg, (canvas.width / 2 - 60), canvas.height - 120, 60, 120)
        }
        else if (i % 2 == 0) {
            var height = Math.floor(Math.random() * 30 + 100)
            ctx.drawImage(treeImg, (canvas.width / 2 - 55) - i * 20, canvas.height - height, 60, height)
        }
        else {
            var height = Math.floor(Math.random() * 20 + 100)
            ctx.drawImage(treeImg, (canvas.width / 2 - 55) + i * 20, canvas.height - height, 60, height)
        }

        ctx.closePath();
    }

}
