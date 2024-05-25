//Una funcion con la palabra reservadoa Function
function greetPerson (name : string) {
    return `hola ${name}`;
}
//Una variable que aloja una funcion de tipo flecha
const saludo = (name : string) =>{
    return `hola ${name}`;
}
//La funcion de arriba acortada
const saludoAcortado = (name : string) => `hola ${name}`;
//Esta solo es posible cuando solo tenemos un return dentro de las llaves y la funcion semanticamente lo permite


console.log(greetPerson('Daniel'))
console.log(saludo('Daniel'))
console.log(saludoAcortado('Daniel'))


//Funcion que retorna un objeto
const getUser = () =>{
    return{
        id : 'abdc',
        userName : 'Daniel Aguilar'
    }
}
console.log(getUser())
//Tenemos un caso parecido al de la funcion de saludo es por 
//eso que podemos aplicar el acortamiento de la funcion
const obtenerUsuario = () => ({id : 'abdc', userName : 'Daniel Aguilar'})
console.log(obtenerUsuario())


