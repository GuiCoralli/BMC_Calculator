import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

//variáveis - variables
const  form = document.querySelector ('form')
const  inputWeight = document.querySelector ('#weight')
const  inputHeight = document.querySelector ('#height')

//fehar a janela de erro ao digitar no campo.
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

//const modalWrapper = document.querySelector ('.modal-wrapper')
//const modalMessage = document.querySelector ('.modal .title span')
//const modalButtonClose = document.querySelector ('.modal button.close')

//função
form.onsubmit =  function(event)/*função event recebe evento*/ {
    event.preventDefault() //cancela o envio(submit) do formulário evitando o padrão carregamento da página
    
    const weight = inputWeight.value /*declaramos a variável peso e capturamos o valor que for digitado no form*/
    const height = inputHeight.value /*declaramos a variável altura e capturamos capturamos o valor que for digitado no form */

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    
    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;

    }

    AlertError.close()
    

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}` //mensagem do IMC na tela do modal
    
    Modal.message.innerText = message //troca do texto 
    //modalWrapper.classList.add('open') //abrimos a caixa do modal quando clicarmos em calcular IMC
    Modal.open()

}


