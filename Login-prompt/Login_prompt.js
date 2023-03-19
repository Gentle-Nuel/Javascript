
let userName = prompt('Who is there?', '')
if (userName === "Admin") {
    let pass = prompt('Password?', '')
    pass.toLowerCase();
    if (pass === "themaster") {
        alert('Welcome!');
    } else if (pass === "" || pass === null) {
        alert('Cancelled');
    } else {
        alert('Wrong Password!');
    }
} else if (userName === '' || userName === null) {
    alert('Cancelled!');
} else {
    alert("User doesn't exist");
}
