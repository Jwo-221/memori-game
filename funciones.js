


const tarjetas = [
    {id: 1, img: 'imagen1.jpg'},
    {id: 2, img: 'imagen2.jpg'},
    {id: 3, img: 'imagen3.jpg'},
    {id: 4, img: 'imagen4.jpg'},
    {id: 5, img: 'imagen5.jpg'},
    {id: 6, img: 'imagen6.jpg'},
    {id: 7, img: 'imagen7.jpg'},
    {id: 8, img: 'imagen8.jpg'},
    {id: 9, img: 'imagen9.jpg'},
    {id: 10, img: 'imagen10.jpg'},
    {id: 11, img: 'imagen11.jpg'},
    {id: 12, img: 'imagen12.jpg'},

    {id: 13, img: 'imagen1.jpg'},
    {id: 14, img: 'imagen2.jpg'},
    {id: 15, img: 'imagen3.jpg'},
    {id: 16, img: 'imagen4.jpg'},
    {id: 17, img: 'imagen5.jpg'},
    {id: 18, img: 'imagen6.jpg'},
    {id: 19, img: 'imagen7.jpg'},
    {id: 20, img: 'imagen8.jpg'},
    {id: 21, img: 'imagen9.jpg'},
    {id: 22, img: 'imagen10.jpg'},
    {id: 23, img: 'imagen11.jpg'},
    {id: 24, img: 'imagen12.jpg'}
];

const dificultad = 'prompt'
let numTarjetas = 0;

function crearTarjetas(dificultad){

    switch(dificultad){
        case 'facil':
            numTarjetas = 8;
            break;
        case 'media':
            numTarjetas = 16;
            break;
        case 'dificil':
            numTarjetas = 24;
        default:
            console.error('no se encontro la dificultad');
            return;
        };
}

const imagenes = [];
for (let i = 1; i <= numTarjetas / 2; i++){
    imagenes.push(`imagen${i}.jpg`);
    imagenes.push(`imagen${i}.jpg`);
}

function barajarArray(array){
    const newArray = [...array];
    let currentIndex = newArray.length, randomIndex, tempValue;

    while (currentIndex!== 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
    
    tempValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = tempValue;
    }
    return newArray
}

const tarjetasBarajadas = barajarArray(imagenes);



function comenzar(){
    window.location.href = './pages/dificultad.html';
}

function atras(){
    window.location.href = '../index.html'
}

function redireccion(){
    window.location.href = '../pages/inicio.html';
}
function facil(){
    redireccion();
    /*aqui debe estar la funcion para crear las tarjetas*/

}

function media(){
    redireccion();
    // mismo que facil
}

function dificil(){
    redireccion();
}


/*CARGAMOS LAS FUNCIONES PARA QUE ESTEN DISPONIBLES*/ 

//FUNCIONES DE INDEX
document.addEventListener('DOMContentLoaded', function() {
    const botonInicio = document.querySelector('.boton-inicio');
    botonInicio.addEventListener('click', comenzar);
   
})

//FUNCIONES DE DIFICULTAD
document.addEventListener('DOMContentLoaded',function(){
    const botonAtras = document.querySelector('.boton-atras');
    botonAtras.addEventListener('click', atras);
})

//FUNCIONES DEL INICIO
document.addEventListener('DOMContentLoaded', function(){
    const botonFacil = document.querySelector('#facil');
    const botonMedia = document.querySelector('#media');
    const botonDificil = document.querySelector('#dificil');

    botonFacil.addEventListener('click', facil);
    botonMedia.addEventListener('click', media);
    botonDificil.addEventListener('click', dificil);
})

