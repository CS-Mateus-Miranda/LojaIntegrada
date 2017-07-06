let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

let fs = require('fs');

const Cadastro = require('../page_objects/cadastropf.po.js');

module.exports = function(){
  const cadastro = new Cadastro();

  this.Given(/^que estou na tela de cadastro de usuário, do tipo pessoa física, da Loja Integrada$/, function(){
    cadastro.visit();
   });

   this.When(/^preencho todos os campos da tela com dados válidos$/, {timeout: 100 * 1000}, function(callback){
     cadastro.cadastrocompleto().then(callback);
   });

   this.Then(/^recebo a mensagem "([^"]*)"$/, {timeout: 100 * 1000}, function() {

   });
}
