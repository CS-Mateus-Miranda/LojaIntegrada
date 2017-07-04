# language: pt
Funcionalidade: Newsletter

Contexto: Estar no site da Loja Integrada
  Dado que estou na home do site

Cenário: Cadastrar novo e-mail para envio de Newsletter
  Quando digito meu e-mail no campo do Newsletter
  Então recebo a mensagem "Obrigado por se inscrever! Aguarde novidades da nossa loja em breve."

Cenário: Cadastrar um e-mail já cadastrado
  Quando digito um e-mail já cadastrado no Newsletter
  Então recebo a mensagem "Seu e-mail já consta em nossa newsletter."

Cenário: Cadastrar um e-mail inválido
  Quando digito um e-mail no formato inválido
  Então não consigo realizar o cadastro

Cenário: Clicar no botão de cadastro sem preencher o e-mail
  Quando clico no botão de cadastro de Newsletter
  Então não consigo realizar o cadastro
