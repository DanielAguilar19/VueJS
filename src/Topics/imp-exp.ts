import heroes, {owners} from "../data/heroes"

const getHeroByID = (id : number) => {
    return heroes.find(hero => hero.id === id) ?? {}//Si no existe retorna un arreglo vacio
}

const getHeroByOwner = (casa : 'DC' | 'Marvel') => {
    return heroes.filter(hero => hero.owner === casa) 
}

console.log(getHeroByID(1));
console.log(getHeroByOwner("DC"));