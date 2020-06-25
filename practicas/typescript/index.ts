const numberString: Array <number | string> =[]

numberString.push('Carlitos');


enum Color{
    red = 'red',
    gree = 'gree',
    blue = 'blue',
}

let colorFavorito: Color = Color.blue;

console.log(colorFavorito)


let comodin: any = 'anything'

comodin = {
    car: 'carro',
    bus: "autobus"
}

let someObject: object = {
    comida:'mani',
    bebida: 'soda'
}
// Function

function add (a : number, b:number):number{
    return a + b;
}

const sum = add(4,4);


function createrAdder(a:number):(number)=>number{
    return function(b:number){
        return a + b
    }
}
const any = createrAdder(2);

const sumTotal = any(5)
console.log(sumTotal);


function fullName (fistName:string, lastName:string = 'Smith'):string{    // parametro opcinal ?
    return `${fistName} ${lastName}`
}

// interface

interface Rectangulo {
    height:number;
    width:number;
    color?: Color;
}

const rec : Rectangulo = {
    height:4,
    width:3,
    // color:Color.blue
}

function area(r:Rectangulo){
    return r.height * r.width
}

console.log(area(rec));

rec.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` :`Un rectangulo`
}

console.log(rec.toString())
