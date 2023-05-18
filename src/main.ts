const poprock="🎵 Pop Rock";
const rock="🎸 Rock";
const hardrock="🤘 Hard Rock";
const clásica="🎼 Clásica";

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
console.log(grupo1,);


const grupo2: Grupos = {
    Nombre: "Queen",
    Año: 1970,
    Activo: false,
    Género: rock,
}
console.log(grupo2);


const grupo3: Grupos = {
    Nombre: "ACDC",
    Año: 1973,
    Activo: true,
    Género: hardrock,
}
console.log(grupo3);


const grupo4: Grupos = {
    Nombre: "Ludwig van Beethoven",
    Año: 1770,
    Activo: false,
    Género: clásica,
}
console.log(grupo4);


const grupo5: Grupos = {
    Nombre: "The Rolling Stones",
    Año: 1962,
    Activo: true,
    Género: rock,
}
console.log(grupo5);
