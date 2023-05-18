const poprock="🎵 Pop Rock";
const rock="🎸 Rock";
const hardrock="🤘 Hard Rock";
const clásica="🎼 Clásica";

const estilos = "background-color: green; font-weigth: bold";

interface Grupos {
    Nombre: string, 
    Año: number,
    Activo: boolean,
    Género: string,
}


const grupo1: Grupos = {

    Nombre: "The Beatles", 
    Año: 1960,
    Activo: true,
    Género: clásica,
}
console.log(`%c${grupo1.Nombre}` , estilos, grupo1);


const grupo2: Grupos = {
    Nombre: "Queen",
    Año: 1970,
    Activo: false,
    Género: rock,
}
console.log(`%c${grupo2.Nombre}` , estilos, grupo2);

const grupo3: Grupos = {
    Nombre: "ACDC",
    Año: 1973,
    Activo: true,
    Género: hardrock,
}
console.log(`%c${grupo3.Nombre}` , estilos, grupo3);


const grupo4: Grupos = {
    Nombre: "Ludwig van Beethoven",
    Año: 1770,
    Activo: false,
    Género: clásica,
}
console.log(`%c${grupo4.Nombre}` , estilos, grupo4);

const grupo5: Grupos = {
    Nombre: "The Rolling Stones",
    Año: 1962,
    Activo: true,
    Género: rock,
}
console.log(`%c${grupo5.Nombre}` , estilos, grupo5);
