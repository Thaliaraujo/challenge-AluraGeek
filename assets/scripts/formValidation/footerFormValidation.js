//Validação do formulário
function formValidation() {
     let name = document.getElementById('name').value;
     let message = document.getElementById('textArea').value;
  
      //Validar se os campos estão preenchidos
     if (name.trim() === '' || message.trim() === '') {
         alert('Por favor, preencha todos os campos.');
         return false;
     }
    
      //Se todas as validações passarem, o formulário é enviado
     alert('Formulário enviado com sucesso!');
  
       //Limpar os valores dos campos
      document.getElementById('form').reset();
  
     return true;
};

export default formValidation;