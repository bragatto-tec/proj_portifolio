document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.forms form');
    const nomeInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const msgInput = document.querySelector('#message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // verificação 
        if (nomeInput.value === '' || emailInput.value === '' || msgInput.value === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // MENSAGEM 
        alert('Mensagem enviada com sucesso!');
        form.reset(); 
    });
});