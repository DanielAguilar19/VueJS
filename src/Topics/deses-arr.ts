//Arreglo de super heroes
const character = ["batman", "superman", "flash", "wonder woman"];

//Desestruturamos las posiciones del arreglo con variables
const [bruce, clark, barry, diana] = character;

/*
Este ejemplo nos sirve para hacer mencion de que al ser posicional la
desestructuracion no podemos hacer que bruce sea superman ya que la posicion
de bruce es la 1 en la desestructuracion, y la de superman es la 2 
en el arreglo, para lograrlo tendriamos que cambiar el orden o hacer uso de:

const [,bruce, etc.. ]

omitiendo asi la posicion de batman en la desestructuracion

*/

console.log(bruce)
//Este console log devuelve el nombre de heroe de cada persona apartir de su identidad secreta


//Tenemos una funcion que nos devuelve un arreglo de numero y string
const returnArray = () =>{
    return [123,'ABC'] as const;
}

//para que puedan ser reconocidos de esta manera hay que definirilos como constantes en la funcion
const [numbers, letter] = returnArray();

//ya aplicado el tipado y la desestructuracion podemos aplicar metodos propios del tipo de datos
console.log(numbers * 2, letter.toLowerCase() )
