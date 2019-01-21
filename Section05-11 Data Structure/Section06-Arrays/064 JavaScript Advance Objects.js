//Primitive Type
int
string
boolean
null
undefined

//Reference Type
var obj1 = {value:10} //New object created as obj1 with value10
var obj2 = obj1 //Referencing New object obj2 to obj1
var obj3 = {value:10} //New object created as obj3 with value10

console.log(obj1 === obj2); //True --> obj1 and obj2 are referencing the same object
console.log(obj1 === obj3); //False --> obj1 and obj3 are referencing the same object

console.log(obj1 == obj2); //True --> obj1 and obj2 are referencing the same object
console.log(obj1 == obj3); //False --> obj1 and obj3 are referencing the same object

//Context VS Scope
//Context is the object environment, the left part before "."
//Scope is the content within "{}"
const obj4 = {
  a : function(){
    console.log(this);
  }
}

//Instantiation
class Player{
  constructor(name, type){
    console.log('player', this);
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi, I am ${this.name}, I am a ${this.type}.`)
  }
}

class Wizard extends Player{
  constructor(name, type){
    super(name, type);
    console.log('wizard', this);
  }
  play(){
    console.log(`WWWWW I am a ${this.type}.`);
  }
}

const wizard1 = new Wizard('Chen', 'Healer');
const wizard2 = new Wizard('Winni', 'Angel');

wizard1.play();
wizard1.introduce();
