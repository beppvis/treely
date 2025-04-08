

function User(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}


function signInformParser() {
    const userName = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    createUser(userName, email, password)
}
function logInformParser() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    logIn(email, password)
}

function checkValididty(email) {
    let users = JSON.parse(localStorage.getItem("users"))
    for (let user_index in users) {
        let user = users[user_index]
        if (user.email === email)
            return false;
    }
    return true;

}
function createUser(name, email, password) {
    if (localStorage.getItem("users") == null) {
        let users = new Array();
        users.push(new User(name, email, password))
        localStorage.setItem("users", JSON.stringify(users))
    }
    else {
        let prevUsers = JSON.parse(localStorage.getItem("users"))
        if (checkValididty(email)) {
            prevUsers.push(new User(name, email, password))
            localStorage.setItem("users", JSON.stringify(prevUsers))
        }
        else {
            alert("Email already exists")
            return
        }
    }
    window.location.href = "./logIn.html";
    alert("Created an account!")
}
function logIn(email, password) {
    let users = JSON.parse(localStorage.getItem("users"))
    for (let user_index in users) {
        let user = users[user_index]
        if (email === user.email && password === user.password) {
            alert("Logged In!")
            localStorage.setItem("activeUser", JSON.stringify(user))
            window.location.href = "/src/index.html"
            return null;
        }
    }
    alert("invalid email or user name")
}
