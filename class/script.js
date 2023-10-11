let arr = [10,20]; //__proto__

let x = 10;

x = "Entri";

//prototypal inheritance

let user = {
    name: "Entri",
    course: "MERN"
}

let active = {
    isActive : true

}

user.__proto__ = active;
console.log(user.isActive);