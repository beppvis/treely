
function scrollDown() {
    let id = null;
    const mainPanel = document.getElementById("mainPanel");
    const mainSlidePanel = document.getElementById("mainSlidePanel");
    console.log("bruh");

    //let pos = -900;
    clearInterval(id);


    //mainPanel.style.display = 'none';
    //mainSlidePanel.style.display = 'flex';
    //id = setInterval(frame, 15);
    //function frame() {
    //    if (pos >= 0) {
    //        clearInterval(id);
    //    }
    //    else {
    //        pos += 10;
    //        mainSlidePanel.style.bottom = pos + 'px';
    //    }
    //}

    mainPanel.style.display = 'none';
    mainSlidePanel.style.display = 'flex';
    mainSlidePanel.style.animation = "magicAppear 0.3s ease-out";
}


