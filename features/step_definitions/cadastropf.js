let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

let fs = require('fs');


const Cadastro = require('../page_objects/cadastropf.po.js');
const Resultado = require('../page_objects/resultado.po.js');

module.exports = function(){
  const cadastro = new Cadastro();
  const resultado = new Resultado();

          // Contexto
          this.Given(/^que estou na tela de cadastro de usuário, do tipo pessoa física, da Loja Integrada$/, function(){
            cadastro.visit();
          });

          // 1) Scenario: Cadastrar novo usuário
          // Step: Quando preencho todos os campos da tela com dados válidos
          this.When(/^preencho todos os campos da tela com dados válidos$/, function (callback) {
            //cadastro.cadastrocompleto().then(callback);
            callback(null, 'pending');
          });

          // 2) Scenario: Cadastrar novo usuario com a senha menor que 5 caracteres
          // Step: Quando preencho a senha com menos de 5 caracteres
          this.When(/^preencho a senha com menos de (\d+) caracteres$/, function (arg1, callback) {
            callback(null, 'pending');
          });

          // 3) Scenario: Autopreencher campos de logradouro pelo CEP
          // Step: Quando preencho o campo CEP com um CEP válido
          this.When(/^preencho o campo CEP com um CEP válido$/, {timeout: 5 * 1000}, function (callback) {
              //cadastro.cepvalido('30642-005');
              callback(null, 'pending');
          });

          // 4) Scenario: Autopreencher campos de logradouro pelo CEP
          // Step: Então os campos Endereço, Bairro e Cidade são preenchidos automaticamente
          this.Then(/^os campos Endereço, Bairro e Cidade são preenchidos automaticamente$/, {timeout: 5 * 1000}, function (callback) {
            //var trueorfalse = resultado.campopreenchido().and.notify(callback);
            //expect(trueorfalse).to.be.true;
            callback(null, 'pending');
          });

          // 5) Scenario: Informar um CEP inválido
          // Step: Quando preencho o campo CEP com um valor inválido
          this.When(/^preencho o campo CEP com um valor inválido$/, {timeout: 5 * 1000}, function (callback) {
            //cadastro.cepinvalido('00000-000');
            callback(null, 'pending');
          });

          // 6) Scenario: Informar um CEP inválido
          // Step: Então recebo a tela de CEP não encontrado
          this.Then(/^recebo a tela de CEP não encontrado$/, {timeout: 5 * 1000}, function (callback) {
            //var trueorfalse = resultado.cepinvalido().and.notify(callback);
            //expect(trueorfalse).to.be.true;
            callback(null, 'pending');
          });

          // 7) Scenario: Não preencher os campos obrigatórios
          // Step: Quando não preencho os campos obrigatórios
          this.When(/^não preencho os campos obrigatórios$/, function (callback) {
            cadastro.cadastrosempreenchimento().then(callback);
          });

          // 8) Scenario: Não preencher os campos obrigatórios
          // Step: Então não consigo realizar o cadastro de usuário
          this.Then(/^não consigo realizar o cadastro de usuário$/, function (callback) {
            expect(browser.getCurrentUrl()).toEqual('https://tghcastro.lojaintegrada.com.br/conta/criar?next=conta_index&email=miranda%40miranda2.com');
          });
}
