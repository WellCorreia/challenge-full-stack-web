## Estrutura do Projeto

```
client
└───tests                                   # Testes Unitários do APP
└───public                                  # Public
└───src
    └───assets                              # Assets
    └───components                          # Componentes gerais (NavBar, SideBar, Footer...)
    └───features                            # Contem as features trabalhadas ou que serão trabalhadas
      └───components                        # Componentes utilizados diretamente nas features
      └───student                           # Feature que será trabalhada
            └───store                       # Contem as definições de mutation, action e state
                └───tests                   # Testes dos principais itens do store
                └───actions.js              # Métodos de requisição
                └───index.js                # Junção e exportação do store
                └───mutation-types.js       # Definição dos tipos das mutations
                └───mutations.js            # Definição das mutations
                └───state.js                # Inicialização dos estados
            └───tests                       # Testes das páginas da feature
    └───http                                # Configuração de comunicação com a API
    └───plugins                             # Plugins
    └───router                              # Contém definição e verificação de rotas
    └───sass                                # SASS
    └───store                               # Definição de acesso a feature
    └───App.vue                             # Base da interface
    └───main.js                             # Main
    └───registerServiceWorker.js            # Registrado de servicos quando o usuário está offline ou com rede lenta
```

## Decisão da Arquitetura Utilizada

A decisão de utilizar dessa arquitetura é pela simplicidade em seu desenvolvimento após a configuração do mesmo. Implementado com a utilização do VueX para o padrão de gestão de estado foi possível centralizar todos os componentes da aplicação de forma que só é possivel alterar um estado com regras especificas dos mesmos.

## Lista de Bibliotecas de Terceiros Utilizadas

#### `sinon` - biblioteca utilizada para testes
#### `vuetify` - framework de UI
#### `vue-resource` - biblioteca que fornece serviços para fazer requisições e lidar com respostas
#### `vuex` - biblioteca de gestão de estados
#### `v-mask` - biblioteca de mascara em input
#### `gerar-cpf` - biblioteca utilizada para geração de CPF nos testes

## O Que Você Melhoraria Se Tivesse Mais Tempo
Melhoraria os testes unitários

## Quais Requisitos Obrigatórios Que Não Foram Entregues
Todos os requisitos foram entregues.

## Run

Para startar a API é necessário rodar os seguintes comandos:

Deve ser feito a instalação das bibliotecas usando o comando:
#### `npm run install` or `yarn install`

Deve ser verificado no arquivo index.js da pasta http se está apontando para a porta certa do seu servidor. Por padrão aponta para a porta 5000.
#### client -> src -> http -> index.js

Para startar a aplicação deverá ser utilizado o commando:
#### `npm run serve` or `yarn serve`

Os testes podem ser executados usando o comando:
#### `npm run test:unit` or `yarn test:unit`
