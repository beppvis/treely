

function drawTrees(slider) {
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
<<<<<<< HEAD
=======

>>>>>>> a086c86 (Final message)
