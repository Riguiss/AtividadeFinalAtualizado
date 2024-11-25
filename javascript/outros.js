// Função para abrir o modal
function expandCard(id) {
    // Primeiro, fechamos todos os modais
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none'); // Esconde todos os modais

    // Seleciona o modal que será aberto com base no ID passado
    const selectedModal = document.getElementById(id);
    if (selectedModal) {
        selectedModal.style.display = 'block'; // Exibe o modal correspondente
    }
}

// Função para fechar o modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none'); // Esconde todos os modais ao fechar
}
