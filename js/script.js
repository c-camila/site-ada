document
  .getElementById('botãoEnviar')
  .addEventListener('click', validaFormulario);

function validaFormulario() {
  if (
    document.getElementById('Nome').value != '' &&
    document.getElementById('E-mail').value != '' &&
    document.getElementById('Telefone').value != ''
  ) {
    alert('Prontinho! Você receberá as novidades através do seu e-mail.');
  } else {
    alert('Por favor, preencha os campos Nome e E-mail!');
  }
}
