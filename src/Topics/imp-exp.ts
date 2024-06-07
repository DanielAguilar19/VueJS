import heroes, {type owner} from "../data/heroes"

export const getHeroByID = (id : number) => {
    return heroes.find(hero => hero.id === id)
}

const getHeroByOwner = (casa : owner) => {
    return heroes.filter(hero => hero.owner === casa) 
}

console.log(getHeroByID(1));
console.log(getHeroByOwner("DC"));