// Código del cuadrado

const lCuadrado = 5;
console.group("Cuadrado");
    console.log("El lado del cuadrado mide: " + lCuadrado + "cm");

    const perimetroCuadrado = lCuadrado * 4;

    console.info("EL pedimetro del cuadrado es: " + perimetroCuadrado +"cm" );

    const areaCudrado = lCuadrado * lCuadrado;

    console.info("El área del cuadrado es: " + areaCudrado + "cm^2");
console.groupEnd();
// Código del cuadrado

// Código del traingulo

const lTriangulo1 = 6;
const lTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = Math.sqrt((lTriangulo1 ** 2)-(baseTriangulo **2)).toFixed(1);

console.group("Triángulo");
console.log(
    "Los lados del triángulo son: primer lado :"
    + lTriangulo1 
    + "cm segundo lado :" 
    + lTriangulo2 
    + "cm la base mide :" 
    + baseTriangulo 
    + "cm"
);

const perimetroTriangulo = lTriangulo1+lTriangulo2+baseTriangulo;
console.info(
    "El perimetro del triángulo es: " 
    + perimetroTriangulo 
    + "cm"
);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(alturaTriangulo)
console.info("La área del triángulo es: " + areaTriangulo +"cm^2");

console.groupEnd();

