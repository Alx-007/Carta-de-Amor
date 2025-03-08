
// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})

// Selecciona el contenedor de los botones de respuesta
const responseButtons = document.querySelector('.response-buttons');

btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;
    
    const coverElement = document.querySelector('.cover');
    coverElement.classList.add('open-cover');

    setTimeout(() => {
        coverElement.style.zIndex = -1;
        
        const paperElement = document.querySelector('.paper');
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');

        // Animación del corazón
        const heartElement = document.querySelector('.heart');
        heartElement.style.display = 'block';

        // Mostrar botones de respuesta
        responseButtons.style.display = 'block';

    }, 500);
});

btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');
    
    setTimeout(() => {
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');

        // Animación del corazón
        const heartElement = document.querySelector('.heart');
        heartElement.style.display = 'none';

        // Ocultar botones de respuesta
        responseButtons.style.display = 'none';

    }, 500);
});

const btnDecline = document.querySelector('#decline');

btnDecline.addEventListener('mouseover', () => {
    // Generar posiciones aleatorias dentro de la ventana
    const maxX = window.innerWidth - btnDecline.offsetWidth;
    const maxY = window.innerHeight - btnDecline.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Aplicar nuevas coordenadas al botón
    btnDecline.style.position = 'absolute';
    btnDecline.style.left = `${randomX}px`;
    btnDecline.style.top = `${randomY}px`;
});

const btnAccept = document.querySelector('#accept');
const snoopyImage = document.querySelector('#snoopyImage');
const loveMessage = document.querySelector('#loveMessage');

btnAccept.addEventListener('click', () => {
    // Cambiar la imagen de Snoopy
    snoopyImage.src = "snoopy2.jpg"; // Asegúrate de tener esta imagen en tu carpeta

    // Mostrar un mensaje bonito
    loveMessage.textContent = "Obviamente que si y sin hacer trampa (te quiero🤍)";
    loveMessage.style.display = 'block';
});
