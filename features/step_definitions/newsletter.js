let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

let fs = require('fs');

const NewsLetter = require('../page_objects/newsletter.po.js');
const Resultado = require('../page_objects/resultado.po.js');

module.exports = function() {
  const newsletter = new NewsLetter();
  const resultado = new Resultado();

  this.Given(/^que estou na home do site$/, function () {
     newsletter.visit();
   });

  this.When(/^digito meu e\-mail no campo do Newsletter$/, function (callback) {
     newsletter.cadastraremail('cdbh@csbh8.com').then(callback);
   });

  this.Then(/^recebo a mensagem "([^"]*)"$/,  {timeout: 100 * 1000}, function(callback) {
     expect(resultado.mensagem.getText()).to.eventually.contain('Obrigado por se inscrever! Aguarde novidades da nossa loja em breve.')
      .and.notify(callback);
      
   });

   this.When(/^digito um e\-mail já cadastrado no Newsletter$/, function(callback){
     newsletter.cadastraremail('cdbh@csbh1.com').then(callback);
   });

   this.Then('Recebo a mensagem de erro', {timeout: 70 * 1000}, function(callback) {
     var resposta = resultado.emailjacadastrado();
     expect(resposta.emailjacadastrado()).to.eventually.contain('Obrigado por se inscrever! Aguarde novidades da nossa loja em breve.');
   });

   this.When(/^digito um e\-mail no formato inválido$/, function(callback){
     newsletter.cadastraremail('cdbh').then(callback);
   });

   this.Then(/^não consigo realizar o cadastro$/, {timeout: 7 * 1000}, function() {
     var trueorfalse = resultado.emailformatoinvalido();
     expect(trueorfalse).to.be.true;
      });

   this.When(/^clico no botão de cadastro de Newsletter$/, function () {
      newsletter.clicarnobotao();
    });
};
