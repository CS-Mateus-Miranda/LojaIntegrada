'use strict';

class Resultado{
  constructor(){
    this.mensagem = element(by.css('.newsletter-confirmacao span'));
  }

  cadastrocomsucesso(){
     var icone = element(by.css('.icon-ok icon-3x'));
     if (icone.isDisplayed() == true){
       return true;
     } else {
       return false;
     }
  }

  // Verificar se o elemento com a mensagem de erro está aparecendo na tela (Mudar código)
  emailjacadastrado(){
    return this.mensagememailcadastrado = element(by.css('.text-error')).getText();
  }

  emailformatoinvalido(){
    var classe = element(by.css('input-conteiner control-group error'));
    if (classe == true){
      return false;
    } else {
      return true;
    }
  }

  // Verifica se a mensagem de sucesso no cadastro está presente na tela
  cadastrocomsucesso(){
    element(by.css('.alert-geral')).isPresent().then(function (isVisible) {
    if (isVisible) {
        return true;
    } else {
        // element is not visible
        return false;
    }
});
  }
}

module.exports = Resultado;
