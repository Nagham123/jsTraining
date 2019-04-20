var database = [
    {
        username: "Andrei",
        password: "Supersecret"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "Ingrid",
        password: "777"
    },
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from learning"
    },
    {
        username: "sally",
        timeline: "Javascript is sooo cool!"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
   

    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}


var userNamePrompt = prompt("What's your name?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
