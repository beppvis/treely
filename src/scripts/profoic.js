function loggedIn() {
    if (localStorage.getItem("activeUser") != null)
        document.getElementById("profilePic").classList.add("active")
    else
        return false
}

function onLoad() {
    loggedIn()
}
