class Parent{
    constructor(){
        this.fullName = "alamin islam";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby1 = new Child("rahat");
const baby2 = new Child("lemon");
console.log(baby1);
console.log(baby2);