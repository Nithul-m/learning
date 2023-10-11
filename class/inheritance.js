class Parent{

    y = 20;
    welcome(){
        console.log("Im display from parent");;
    }
}


class Child extends Parent{ //subclass //super class

    x = 10;
    display(){
        console.log("Im display from child");;
    }
}

let obj = new Child();
console.log(obj.y);