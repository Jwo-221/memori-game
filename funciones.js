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

const imagenNegra = '../imagenes/img-negra/imagen-negra.jpg'


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
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');
            tarjeta.dataset.id = imagen.id;
            tarjeta.dataset.img = imagen.img;

            const imagenBocaAbajo = document.createElement('img');
            imagenBocaAbajo.classList.add('boca-abajo');
            imagenBocaAbajo.src = `${imagenNegra}`;

            const imagenBocaArriba = document.createElement('img');
            imagenBocaArriba.classList.add('boca-arriba');
            imagenBocaArriba.src = imagen.img

            tarjeta.appendChild(imagenBocaAbajo);
            tarjeta.appendChild(imagenBocaArriba)

            contenedorTarjetas.appendChild(tarjeta)
        });
        
};


function contador(){
    const contadorIntentos = document.getElementById('intentos');
    const contadorAciertos = document.getElementById('aciertos');
    const cartasClic = document.querySelectorAll('.tarjeta');
    let intentosTotales = 0;
    let click = 0;
    let aciertos = 0;
    let cartasSeleccionadas = [];

    contadorIntentos.innerHTML = 'aun no iniciamos';
    contadorAciertos.innerHTML = 'aun no iniciamos';

    function actualizarContadores(){
        contadorIntentos.innerHTML = intentosTotales
        contadorAciertos.innerHTML = aciertos;
    };

    function verificarAciertos(){
        if(cartasSeleccionadas.length === 2){
            if(cartasSeleccionadas[0].dataset.id === cartasSeleccionadas[1].dataset.id){
                aciertos++;
                
            }else{}

            cartasSeleccionadas = [];
            actualizarContadores();
        }
    }

    function intentos(){
        click++;
        cartasSeleccionadas.push(this);
        if( click === 2 ){
            intentosTotales++;
            click = 0;
            actualizarContadores();
            verificarAciertos();
        } else{};
    }


    cartasClic.forEach((carta)=>{
        carta.addEventListener('click', intentos)
        carta.addEventListener('click', function(){
            this.querySelector('.boca-abajo').classList.toggle('oculta');
            this.querySelector('.boca-arriba').classList.toggle('visible');
        });

    });
};

    
    

    

//FUNCIONES DE REDIRECCION

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

function botonFullScreem(){
    const elemento = document.documentElement;
        if (elemento.requestFullscreen) {
            elemento.requestFullscreen();
          } else if (elemento.mozRequestFullScreen) {
            elemento.mozRequestFullScreen(); // Firefox
          } else if (elemento.webkitRequestFullscreen) {
            elemento.webkitRequestFullscreen(); // Chrome, Safari y Opera
          } else if (elemento.msRequestFullscreen) {
            elemento.msRequestFullscreen()};
}




//RENDERIZACION DEL INICIO DE JUEGO

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
        contador();
    
    }
})
