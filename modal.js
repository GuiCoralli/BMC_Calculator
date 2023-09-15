export const Modal = {
    wrapper: document.querySelector ('.modal-wrapper'),
    message: document.querySelector ('.modal .title span'),
    buttonClose: document.querySelector ('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')//abrimos a caixa do modal quando clicarmos em calcular IMC

    },
    close() {
        Modal.wrapper.classList.remove('open')//fechamos a caixa do modal quando clicar no botão fechar
    }
}

//removendo a caixa do modal
Modal.buttonClose.onclick = function() {
    //modalWrapper.classList.remove('open')//fechamos a caixa do modal quando clicar no botão fechar
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)//chamamos a variável global (window) adicionando um evento (addEventListener), no qual colocamos também o primeiro evento que é a tecla digitada('keydown') e o segundo evento que é a função (handleKeydown).

function handleKeydown(event) {//função declarada do evento.
    if(event.key == 'Escape'){//atribuir uma funcionalidade através de uma condicional (IF) para o ESC (’Escape’) 
        Modal.close()// Onde fechamos o modal atrés do comando close
    }
}
