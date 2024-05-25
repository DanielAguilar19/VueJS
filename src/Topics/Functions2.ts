//Un objeto de heroes en la que batman no tiene poderes y superman si tiene
const heroes = [
    {
        id : 1,
        name: 'Batman',
    },
    {
        id : 2,
        name: 'Superman',
        power: 'Super Fuerza',
    },
]
//Para buscar el hereo hacemos
const hero = heroes.find((h) => h.id === 1);
//find es un metodo de los arreglos, y le decimos que vamos a buscar
//el heroe con el id = 1

console.log(hero?.name);
// el signo ? es un null check, esto nos permite decirle que 
// si el parametro no es nuo que haga la siguiente instruccion despues del punto