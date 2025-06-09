    let form = document.querySelector('.questionario');
    let mensagem = document.querySelector('.mensagemObrigado');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        mensagem.textContent = 'Obrigado pelas suas palavras!!!';
        form.reset()
    });
