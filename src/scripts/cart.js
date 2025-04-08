function Tree() {
    this.image = document.getElementById("tree1");
}


function getTreeBarComponents(name, imagePath, count) {
    return ` 
<img src="${imagePath}" style="display:flex;margin-right:0;margin-left:0;border-radius:11px 11px 0px 0px" width="100%"
                height="320px">
<h2>${name}</h2>
            <div class="displayButtons">
                <button class="buttonstyle" onclick="increment('${name}',this)">+</button><span id='value'>${count}</span><button class="buttonstyle" onclick="decrement('${name}',this)">-</button>
            </div>
        `
}

function increment(name, item) {
    let selectedTree = name
    if (selectedTree != null) {
        var cart = localStorage.getItem("cart")
        if (cart != null) {
            cart = JSON.parse(cart)
            if (cart[selectedTree] != null)
                cart[selectedTree] = parseInt(cart[selectedTree]) + 1
        }
        else {
            cart = {};
            cart[selectedTree] = 1
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(item.parentElement.children[1].innerHTML)
        item.parentNode.children[1].innnerHTML = cart[selectedTree]
        window.location.reload()
    }
}

function decrement(name, item) {
    let selectedTree = name
    if (selectedTree != null) {
        var cart = localStorage.getItem("cart")
        if (cart != null) {
            cart = JSON.parse(cart)
            if (cart[selectedTree] > 1) {
                cart[selectedTree] = parseInt(cart[selectedTree]) - 1
            }
            else if (parseInt(cart[selectedTree]) <= 1) {
                alert("removing Item")
                console.log(item.parentNode.parentNode.remove())
                delete cart[selectedTree]
            }
        }
        else {
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(item.parentElement.children[1].innerHTML)
        item.parentNode.children[1].innnerHTML = cart[selectedTree]
        window.location.reload()
    }
}



function checkOut() {
    alert('Thank you for your purchase!')
    localStorage.clear("cart");
    window.location.href = 'index.html'
}


async function getImagePath(treeName) {
    const treesArray = new Array();
    let trees = await fetch('./scripts/data/trees.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.trees.forEach(data => { treesArray.push(data) })
        })
        .catch(error => console.log(error));
    for (let tree_index in treesArray) {
        if (treesArray[tree_index]["name"] === treeName)
            return treesArray[tree_index]["filePath"]
    }
    return "error"
}


function setTotal() {
    let amount = 0
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let tree in cart) {
        amount += parseInt(cart[tree])
    }
    let tota = document.getElementById("totalCost");
    tota.innerHTML = "$" + amount;
}

async function onLoad1() {
    var treeBar = document.getElementById("treeBar");
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let tree in cart) {
        var treeDisplayBar = document.createElement("div");
        treeDisplayBar.className = "displayBar";
        let imagePath = await getImagePath(tree);
        treeDisplayBar.innerHTML = getTreeBarComponents(tree, imagePath, cart[tree]);
        treeBar.appendChild(treeDisplayBar);
    }
    setTotal()
}
