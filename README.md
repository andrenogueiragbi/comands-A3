# Sistema de Documentação de Comandos API

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://a3-commands-api.herokuapp.com/v1/online)

A API está em nuvem na plataforma [Heroku], a API foi desenvolvida em [node.js] usando a estrutura de retorno em JSON.

## Instalação
Clone o repositório no GIT

```
git clone https://github.com/andrenogueiragbi/commands-A3
```
Entre do repositório

```
cd commands-A3
```

Clone o repositório no GIT

```
git clone https://github.com/andrenogueiragbi/commands-A3
```
Instale as dependências.

'''
yarn install
'''
Crie o arquivo .env dentro da pasta raiz
'''
touch .env && nano .env
'''
colocar as seguintes informações do seu banco de dados.
DATABASE={nome do banco de dados}
DB_USER={usuário do banco de dados}
DB_PASS={senha}
DB_HOST={ip ou domínio so servidor}

Informar qual o tipo de servidor de banco de dados irá usar. Edite o aquivo e mude a variável dialect conforme banco de dados suportado pelo ORM [Sequelize]: mysql, postgres, sqlite, entre outros.

EX: dialect: 'postgres',

Caso haver alguma particularidade em seu banco de dados tipo com porta, ssl, entre outro verifique a documentação do [Sequelize]. As dependências disponível no package.json são somente os banco de dados mysql, postgres, sqlite,

```
nano src/config/database.js
```
&gt; Obs: caso necessite adicionar outra dependência use o comando 'yarn add {nome do pacote}'.

Inicie o servidor em modo desenvolvimento.
'''
yarn dev
'''
O servidor está configurado para rodar na porta '5001'

'''sh
127.0.0.1:5001
'''

## Bibliotecas usadas

| Plugin | README |
| ------ | ------ |
| bcryptjs | [bcryptjs/README.md][bcryptjs] |
| cors | [cors/README.md][cors] |
| dotenv | [dotenv/README.md][dotenv] |
| express | [express/README.md][express] |
| jsonwebtoken | [jsonwebtoken/README.md][jsonwebtoken] |
| mysql2 | [mysql2/README.md][mysql2] |
| pg | [pg/README.md][pg] |
| sqlite3 | [sqlite3/README.md][sqlite3] |
| swagger-jsdoc | [swagger-jsdoc/README.md][swagger-jsdoc] |
| swagger-ui-express | [swagger-ui-express/README.md][swagger-ui-express] |

## Rotas da API

## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| 'GET' | Retorna informações de um ou mais registros. |
| 'POST' | Utilizado para criar um novo registro. |
| 'PUT' | Atualiza dados de um registro ou altera sua situação. |
| 'DELETE' | Remove um registro do sistema. |

## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Acesso não autorizado.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `500` | Falha no servidor|

## Formato de requisição Header

| Nome | Tipo |
|---|---|
| `Content-Type` | application/json|


# Rota Usuário
#### Buscar Usuários
```http
  GET /v1/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Buscar Usuários por ID
```http
  GET /v1/users/{id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Apagar Usuários por ID
```http
  DELETE /v1/users/{id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |


#### Criar Novo Usuários
```http
  POST /v1/users/
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `String` | **Requerido**. nome do usuário |
| `email` | `String` | **Requerido**.  email do usuário|
| `password` | `String` | **Requerido**. senha do usuário |
| `level` | `Number` | **Requerido**. nivel de permissão do usuário|
| `company` | `String` | **Requerido**. empresa que usuário trabalha|
| `token` | `Bearer` | **Requerido**. token de segurança |


#### Atualizar Usuários
```http
  PUT /v1/users/{id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `String` | **Requerido**. nome do usuário |
| `email` | `String` | **Requerido**.  email do usuário|
| `password` | `String` | **Requerido**. senha do usuário |
| `level` | `Number` | **Requerido**. nivel de permissão do usuário|
| `company` | `String` | **Requerido**. empresa que usuário trabalha|
| `token` | `Bearer` | **Requerido**. token de segurança |


#### Login Usuários
```http
  POST /v1/users/login
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `String` | **Requerido**.  email do usuário|
| `password` | `String` | **Requerido**. senha do usuário |

# Rota Ticket
#### Cadastro de Novo Usuario por Ticket
```http
  POST /v1/users/login
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `String` | **Requerido**. nome do usuário |
| `email` | `String` | **Requerido**.  email do usuário|
| `password` | `String` | **Requerido**. senha do usuário |
| `company` | `String` | **Requerido**. empresa que usuário trabalha|
| `ticket` | `String` | **Requerido**. ticket de confirmação |

#### Buscar todos Ticket
```http
  GET /v1/ticket
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Apagar Ticket por ID
```http
  DELETE /v1/ticket/{ID}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Criar um novo Ticket
```http
  POST /v1/ticket/
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email_user` | `String` | **Requerido**.  email do usuário|
| `token` | `Bearer` | **Requerido**. token de segurança |

# Rota Comandos
#### Buscar Todos Comandos
```http
  GET /v1/commands
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Apagar Comandos por {ID}
```http
  DELETE /v1/commands/{id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Cadastrar Novo Comando
```http
  POST /v1/commands/{id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `String` | **Requerido**. titulo do comando |
| `description` | `String` | **Requerido**. descrição do comandoa |
| `commands` | `String` | **Requerido**.  comando |
| `tags` | `String` | **Requerido**. tags para busca do comando |
| `creator` | `String` | **Requerido**. criador do comando |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Atualizar Comando por ID
```http
  PUT /v1/commands/{id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `String` | **Requerido**. titulo do comando |
| `description` | `String` | **Requerido**. descrição do comandoa |
| `commands` | `String` | **Requerido**.  comando |
| `tags` | `String` | **Requerido**. tags para busca do comando |
| `creator` | `String` | **Requerido**. criador do comando |
| `token` | `Bearer` | **Requerido**. token de segurança |


#### Atualizar Comando por Categorias
```http
  GET /v1/commands/search/linux
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |

# Rota Tipos Comandos
#### Buscar Todos Tipos De Comandos
```http
  GET /v1/type
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Apagar type de Comando por {ID}
```http
  DELETE /v1/type/{id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Cadastrar Novo tipo Comando
```http
  POST /v1/type/
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `String` | **Requerido**. nome do tipo |
| `token` | `Bearer` | **Requerido**. token de segurança |

#### Atualizar tipo Comando por ID
```http
  PUT /v1/type/{id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `String` | **Requerido**. nome do tipo |
| `token` | `Bearer` | **Requerido**. token de segurança |


## Autores

- [@andrenogueiragbi](https://github.com/andrenogueiragbi)

- [@RonaldoThierre](https://github.com/RonaldoThierre)

## licença

MIT

 
   [node.js]: <http://nodejs.org>
   [heroku]: <https://www.heroku.com/>
   [Sequelize]: <https://sequelize.org/>
   [bcryptjs]: <https://www.npmjs.com/package/bcryptjs>
   [cors]: <https://npmjs.com/package/cors>
   [dotenv]: <https://npmjs.com/package/dotenv>
   [express]: <https://npmjs.com/package/express>
   [jsonwebtoken]: <https://npmjs.com/package/jsonwebtoken>
   [morgan]: <https://npmjs.com/package/morgan>
   [mysql2]: <https://npmjs.com/package/mysql2>
   [nodemon]: <https://npmjs.com/package/nodemon>
   [pg]: <https://npmjs.com/package/pg>
   [sequelize]: <https://npmjs.com/package/sequelize>
   [sqlite3]: <https://npmjs.com/package/sqlite3>
   [swagger-jsdoc]: <https://npmjs.com/package/swagger-jsdoc>
   [swagger-ui-express]: <https://npmjs.com/package/swagger-ui-express>
   
