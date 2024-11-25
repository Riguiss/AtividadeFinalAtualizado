document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para poder mostrar a mensagem
    
    // Exibe a mensagem de "Mensagem Enviada"
    document.getElementById('mensagem-enviada').classList.remove('hidden');
    
    // Limpa o formulário
    document.getElementById('form-contato').reset();
    
});
