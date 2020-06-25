// console.log(`this: ${this}`) // this es window

function whoisThis(){
    return this
}
// console.log(whoisThis())  // this es window


function whoisThisStrict(){
    'use strict';
    return this
}
// console.log(whoisThisStrict())  // this es undefined

const person ={
    name:`Gabriel`,
    saludar(){
        console.log(`Hola soy ${this.name}`)
    }
}

// person.saludar()            // this hace referencia al objeto

const action = person.saludar
// action()                           // this es undefined por que se ejecuta fuera del contexto del objeto

function Person(name){
    this.name = name;
}

Person.prototype.saludar = function (){
    console.log(`Hola son ${this.name}`)
}

let Maria = new Person(`Maria`);

Maria.name=`Antonia`
Maria.saludar()