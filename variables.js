let nombre = String();
let apellido = String();
let usurio = String();
let edad = Number();
let email = String();
let mayoredad = Boolean();
let dineroahorrado = Number();
let deuda = Number();


nombre="Antonio"
apellido="Becerra"
usurio="xoyoc"
edad="44"
email="xoyoc_l2@hotmail.com"
mayoredad=true
dineroahorrado=100
deuda=50

console.warn("-------- PRIMER EJERCICIO ----------");
console.log(nombre+" "+apellido);
console.log(dineroahorrado-deuda)

console.warn("-------- SEGUNDO EJERCICIO ----------");
function NombreCompleto(nom, aped, nick){
    nomcp = nom + " " +aped;
    return console.log("Mi nombre es " + nomcp +", pero prefiero que me digas "+ nick+".")
};

NombreCompleto("Juan", "Lopez", "jlopez");
NombreCompleto(nombre, apellido, usurio);

console.warn("-------- TERCER EJERCICIO ----------");

let i=0;
while(i<5){
    i++;
    console.log("El valor de  i es "+i);
}

let x=10;
while(x>=2){
    x--;
    console.log("El valor de  x es "+x);
}

console.warn("-------- CUARTO EJERCICIO ----------");

suma = prompt("El resultado de 2 + 2 es");
if(suma === "2"){
    console.log("Felicidades es correcta tu respuesta");
}




console.warn("--------  EJERCICIO ----------");
console.warn("--------  EJERCICIO ----------");
console.warn("--------  EJERCICIO ----------");
console.warn("--------  EJERCICIO ----------");
