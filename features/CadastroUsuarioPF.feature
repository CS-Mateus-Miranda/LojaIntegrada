# language: pt
Funcionalidade: Cadastro de usuário, pessoa física

Contexto: Estar na tela de cadastro de usuário da Loja Integrada
  Dado que estou na tela de cadastro de usuário, do tipo pessoa física, da Loja Integrada

Cenário:  Cadastrar novo usuário
  Quando preencho todos os campos da tela com dados válidos
  Então recebo a mensagem "Cliente criado com sucesso."

Cenário: Cadastrar novo usuario com a senha menor que 5 caracteres
  Quando preencho a senha com menos de 5 caracteres
  Então não consigo realizar o cadastro

Cenário: Autopreencher campos de logradouro pelo CEP
  Quando preencho o campo CEP com um CEP válido
  Então os campos Endereço, Bairro e Cidade são preenchidos automaticamente

Cenário: Informar um CEP inválido
  Quando preencho o campo CEP com um valor inválido
  Então recebo a tela de CEP não encontrado

Cenário: Não preencher os campos obrigatórios
  Quando não preencho os campos obrigatórios
  Então não consigo realizar o cadastro de usuário
