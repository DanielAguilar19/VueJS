import { Hero } from "../data/heroes";
import { getHeroByID } from "./imp-exp";
/*console.log('inicio');

new Promise ((resolve, reject) => {

	resolve('Se cumplio la promesa')
	reject('Se cumplio la promesa')
	
})
.then((mensaje)=> console.log(mensaje))
.catch((errorMessage)=> console.log(errorMessage))
.finally(() => console.log('fin de la promesa'))

console.log('final');
*/


//Parametros en Promesas

const getHeroByIdAsync = (id:number):Promise<Hero> =>{
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            const hero = getHeroByID(id);
            if (hero){
                resolve(hero);
            } else {
                reject(new Error('No hay ningun Hero con ese ID'));
            }   

        }, 1500);
    })
}

getHeroByIdAsync(100)
    .then(hero => console.log('El nombre es', hero.name))
    .catch(message => alert(message))