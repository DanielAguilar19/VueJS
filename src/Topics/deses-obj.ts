/*
La desestructuracion nos va a permitir trabajar con las propiedades
que necesitemos

export const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
    power?: ''

}

las llaves nos ayudan a desestruturar las propiedades que necesitamos
en este caso solo usare age y name
const {age, name, power = 'No tiene poder'} = person;


Ahora para imprimirlas bastaria con hacer lo siguiente
console.log({
    age, name, power
})
*/

//creamos una interfaz para hacer mas facil el crear los heroes apartir de ella
interface hero{
    name: string;
    age: number;
    codeName: string;
    power?: string;
} 
export const person:hero = {
    name: 'Daniel',
    age: 19,
    codeName: 'curvy',
    power: 'Volar',
}
const createHero = ({name, age, codeName, power}:hero)=>({
    id: 123123,
    name: name,
    age: age,
    codeName:codeName,
    power:power,
})

console.log(createHero(person))