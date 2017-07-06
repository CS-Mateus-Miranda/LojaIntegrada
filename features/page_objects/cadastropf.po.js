'use strict';

class CadastroPF{
  construtor(){

  }

  cadastrocompleto(){
    this.email = element(by.css('#id_email.span8')).sendKeys('miranda@miranda2.com');
    this.btnConfirmar = element(by.css('#id_email+ .principal')).click();
    this.inputconfirmemail = element(by.id('id_confirmacao_email')).sendKeys('miranda@miranda2.com');
    this.inputsenha = element(by.id('id_senha')).sendKeys('senhaforte');
    this.inputconfirmsenha = element(by.id('id_confirmacao_senha')).sendKeys('senhaforte');
    this.inputnome = element(by.id('id_nome')).sendKeys('Mateus Miranda');
    this.inputcpf = element(by.css('#id_cpf')).sendKeys('12677253623');
    this.inputcelular = element(by.id('id_telefone_celular')).sendKeys('(31)98452-3244');
    this.inputtelefone = element(by.id('id_telefone_principal')).sendKeys('(31)2323-2323');
    this.dropsexo = element(by.id('id_sexo')).$('[value="m"]').click();
    this.inputdtnasc = element(by.id('id_data_nascimento')).sendKeys('16/06/1996');
    browser.driver.sleep(4000);
    this.inputcep = element(by.id('id_cep')).sendKeys('30642-050');
    browser.driver.sleep(10000);
    this.inputnumero = element(by.id('id_numero')).sendKeys('111');
    this.inputcomplemento = element(by.id('id_complemento')).sendKeys('Complemento');
    this.inputreferencia = element(by.id('id_referencia')).sendKeys('Referencia');
    var button = $('.principal');
    return button.click();
  }

  visit(){
    browser.get('https://tghcastro.lojaintegrada.com.br/conta/login');
  }
}
module.exports = CadastroPF;
