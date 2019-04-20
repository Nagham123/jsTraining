var database = [
    {
        username: "Andrei",
        password: "Supersecret"
    }
];
var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from learning"
    },
    {
        username: "sally",
        timeline: "Javascript is sooo cool!["
    }
];

var userNamePrompt = prompt("What's your name?"); 
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log(newsfeed);
} else {
    alert("Sorry wrong username and password!");
}
}

signIn(userNamePrompt, passwordPrompt);
