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
          return false;
      }
    });
  }

  cepinvalido(){
    return element(by.css('.principal')).isPresent();
  }

  campopreenchidoautomaticamente(){
    this.endereco = element(by.id('id_endereco')).getText();
    this.bairro = element(by.id('id_bairro')).getText();
    this.cidade = element(by.id('id_cidade')).getText();

    if (endereco.length > 0 && bairro.length > 0 && cidade.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Resultado;
