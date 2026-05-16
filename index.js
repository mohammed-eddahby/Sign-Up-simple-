const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector("button");


console.log(nom);
console.log(email);
console.log(password);
console.log(button);

const savedusername = JSON.parse(localStorage.getItem("username") || "null");
if (savedusername) {
    nom.value = savedusername || "";
    email.value = savedusername || "";
    password.value = savedusername || "";
}

button.addEventListener("click", function(event){
    event.preventDefault();

    const user ={
        username: nom.value,
        email: email.value,
        password: password.value
    };
    localStorage.setItem("username", JSON.stringify(user));
    alert("Name: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});


button.addEventListener("click", function(event){

    if (nom.value === "") {
    alert("Please fill in username");
    return;
    }

    if (email.value === "") {
    alert("Please fill in email");
    return;
    }

    if (password.value === "") {
    alert("Please fill in password");
    return;
    }

    event.preventDefault();
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);
    alert("Name: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});