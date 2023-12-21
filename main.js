const form = document.querySelector('form');
const inputPeso = document.querySelector("#peso")
const inputAltura = document.querySelector("#altura")


const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-card .title span'),
    buttonClose:document.querySelector('.modal-card button.close')
    ,

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}


   
// 3 maneiras de riar e atribuir função a um evento
form.onsubmit = function () {
    event.preventDefault();
    
    const peso = inputPeso.value;
    const altura = inputAltura.value

    const result = peso / (altura * altura)
    const message = `O seu IMC É de ${result.toFixed(2)}`
    
    Modal.message.innerText = message
    Modal.open()
    
    console.log(`${result.toFixed(2)}kg`)

    Modal.buttonClose.onclick = () => {
        Modal.close()
    }

    
}












// form.onsubmit = ()  => {

// }

// function handleSubmit () {
    
// }

// document.addEventListener('Click', )

// console.log(peso, altura)


// function clickOpen() {

//     const btn = document.querySelector('#calc')

// }