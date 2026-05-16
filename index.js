const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector("button");


console.log(nom);
console.log(email);
console.log(password);
console.log(button);


button.addEventListener("click", function(event){

    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Please fill in all fields.");
        return;
    }
    else if (password.value === "") {
        alert("please fill in password");
        return;
    }
    else if (email.value === "") {
        alert("please fill in email");
        return;
    }
    else if (nom.value === "") {
        alert("please fill in username");
        return;
    }

    event.preventDefault();
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);
    alert("Name: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});