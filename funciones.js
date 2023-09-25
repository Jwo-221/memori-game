const imagenes = [
    {id: 1, img: '../imagenes/imagen1.jpg'},
    {id: 2, img: '../imagenes/imagen2.jpg'},
    {id: 3, img: '../imagenes/imagen3.jpg'},
    {id: 4, img: '../imagenes/imagen4.jpg'},
    {id: 5, img: '../imagenes/imagen5.jpg'},
    {id: 6, img: '../imagenes/imagen6.jpg'},
    {id: 7, img: '../imagenes/imagen7.jpg'},
    {id: 8, img: '../imagenes/imagen8.jpg'},
    {id: 9, img: '../imagenes/imagen9.jpg'},
    {id: 10, img: '../imagenes/imagen10.jpg'},
    {id: 11, img: '../imagenes/imagen11.jpg'},
    {id: 12, img: '../imagenes/imagen12.jpg'},
];

function seleccionarCartas(imagenes, cantidad){
    const copiaImagenes = [...imagenes];

    const imagenesSeleccionadas= [];

    while(imagenesSeleccionadas.length < cantidad && copiaImagenes.length > 0){
        const indiceAleatorio = Math.floor(Math.random() * copiaImagenes.length);

        imagenesSeleccionadas.push(copiaImagenes[indiceAleatorio]);

        copiaImagenes.splice(indiceAleatorio, 1);

        
    };
    
    return imagenesSeleccionadas;
}

function barajarArray(imagenesSeleccionadas){
    const newArray = [...imagenesSeleccionadas, ...imagenesSeleccionadas];
    let currentIndex = newArray.length, randomIndex, tempValue;

    while (currentIndex!== 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
    
    tempValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = tempValue;
    }
    return newArray
};

function crearTarjetas(){
    let cantidad = parseInt(localStorage.getItem('numTarjetas'));
    const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
    let tarjetasSeleccionadas  = seleccionarCartas(imagenes, cantidad);
    const tarjetasBarajadas = barajarArray(tarjetasSeleccionadas);


        tarjetasBarajadas.forEach((imagen, index)=>{
            const tarjeta = document.createElement('img');
            tarjeta.classList.add('tarjeta');
            tarjeta.dataset.id = imagen.id;
            tarjeta.dataset.img = imagen.img;
            tarjeta.src = `${imagen.img}`

            contenedorTarjetas.appendChild(tarjeta)
        });
        
};



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
    localStorage.setItem('numTarjetas', 4);
    redireccion();
    ;
}
function media(){
    localStorage.setItem('numTarjetas', 8)
    redireccion();
}
function dificil(){
    localStorage.setItem('numTarjetas', 12)
    redireccion();
}


document.addEventListener('DOMContentLoaded',function(){
    const pagina = document.querySelector('body');

    if(pagina.classList.contains('pagina-principal')){
        const botonInicio = document.querySelector('.boton-inicio');
        botonInicio.addEventListener('click', comenzar);
    }
    if(pagina.classList.contains('pagina-dificultad')){
        
        const botonFacil = document.querySelector('#facil');
        const botonMedia = document.querySelector('#media');
        const botonDificil = document.querySelector('#dificil');
        const botonAtras = document.querySelector('.boton-atras');

        botonFacil.addEventListener('click', facil);
        botonMedia.addEventListener('click', media);
        botonDificil.addEventListener('click', dificil);
        botonAtras.addEventListener('click', atras);
        
    }
    if(pagina.classList.contains('pagina-inicio')){
        crearTarjetas();


    }
})
