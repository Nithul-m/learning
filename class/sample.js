// class Users{ //first letter capital

//     // name; //attribute
//     constructor(nam){
//         this.name = nam;
//     }
//     // welcome(){ //method
//     // console.log("welcome", this.name);
//     // }

//     get name(){
//         return this._name;
//     }
//     set name(value){
//         if(value.length < 4){
//             console.log("name is too short");
//             return;
//         }
//         this._name = value;
//     }
// }


// let obj = new Users("tom"); //object
// // let obj2 = new Users("ravi"); //object

// // console.log(obj.name);
// // obj.welcome();
// console.log(obj.name);




class Teacher{
    subject = "Maths";
    subjects(){
        console.log("My favorite subject is", this.subject);
    }
}
class Student extends Teacher{
    nam = "Nithul";
    name1(){
        console.log("My name is", this.nam);
    }
}
let obj = new Student("Nithul");
// console.log(obj.name); 
obj.name1();
obj.subjects();



