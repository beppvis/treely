function Tree() {
    this.image = document.getElementById("tree1");
}

function goTo(name) {
    localStorage.setItem("treeSelected", name)
    window.location.href = '../src/treeData.html'
}
function getTreeBarComponents(name, img_path, description) {
    return `
                <img src="${img_path}" style="display:block;margin-right:0;margin-left:0;border-radius:11px 11px 0px 0px" width="100%"
                height="320px">
<h2>${name}</h2>
<center>
                ${description}
            </center>
            <div class="displayButtons">
<button onclick="goTo('${name}')">Plant</button>
            </div>
 
`

}

function loggedIn() {
    if (localStorage.getItem("activeUser") != null)
        document.getElementById("profilePic").classList.add("active")
    else
        return false
}

async function onLoad1() {
    loggedIn();
    let treesArray = new Array();
    let trees = await fetch('./scripts/data/trees.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.trees.forEach(data => { treesArray.push(data) })
        })
        .catch(error => console.log(error));
    var treeBar = document.getElementById("treeBar");
    for (let tree_index in treesArray) {
        var tree = treesArray[tree_index]
        var treeDisplayBar = document.createElement("div");
        treeDisplayBar.className = "displayBar";
        treeDisplayBar.innerHTML = getTreeBarComponents(tree["name"], tree["filePath"], tree["description"]);
        treeBar.appendChild(treeDisplayBar)
    }
}

