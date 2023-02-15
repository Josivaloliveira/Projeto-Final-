// selecione o elemento âncora pelo seletor da classe
const botaoWhatsapp = document.querySelector('.botao-whatsapp');

// adicione um ouvinte de evento de clique ao elemento âncora
botaoWhatsapp.addEventListener('click', function(event) {
  // previna o comportamento padrão do link de âncora
  event.preventDefault();

  // faça algo personalizado, como exibir uma mensagem de confirmação
  alert('Clique em OK para abrir o aplicativo WhatsApp e iniciar uma conversa com o número 81988887777 e a mensagem "Olá, eu gostaria de fazer um pedido."');

  // opcionalmente, navegue para o link de âncora original após o processamento personalizado
  window.location.href = this.href;
});
