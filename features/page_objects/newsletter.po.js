'use strict';

class NewsLetter {
  constructor() {
    this.inputemail = element(by.name('email'));
    this.btnEnviar = element(by.css('.newsletter-assinar'));
  }

  cadastraremail(email){
    this.inputemail.sendKeys(email);
    return this.btnEnviar.click();
  }

  clicarnobotao(){
      return this.btnEnviar.click();
  }

  visit() {
    browser.get('http://tghcastro.lojaintegrada.com.br/');
  }
}

module.exports =  NewsLetter;
