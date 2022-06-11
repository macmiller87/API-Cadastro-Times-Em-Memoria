## API de cadastro de Usuários e Times em memória.

<p align="center">
<img src="screens/Documentação_da_Api_times_em_memoria.png" alt="demostração" />
</p>

### 💻 Projeto

- Nesta aplicação está sendo feita uma API, que é possível cadastrar `usuário com (username, userAvatar)`, a aplicação gera um `user_id` único randômico para o usúario, também é possível cadastrar `times de futebol com (nome, cidade e pais)`,a aplicação gera um `team_id` único randômico para o time, desde que exista um `usuário` já cadastrado para poder fazer o cadastro dos times, essa verificação é feita pelo `user_id` do usuário, também é possível listar todos usuários criados, e seus respectivos times cadastrados .....

## 🚀 Como executar
### Rotas da aplicação

#### CreateUsers.routes: Post - `/createUser` 

- A rota deve receber `username` e `userAvatar` dentro do corpo da requisição. Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto no seguinte formato:   

"user": {
	"user_id": "",
	"username": "",
	"userAvatar": "",
	"created_at": "",
}

#### CreateUsersTeams.routes: Post - `/createUserTeam/:user_id`

- A rota deve receber `teamName`, `city` e `country` dentro do corpo da requisição e, uma propriedade `user_id` contendo o `id` do usuário dentro do header da requisição. Ao criar um novo Time, ele deve ser armazenada dentro do array `userTeams` do usuário que está cadastrando esse time, Certifique-se que o ID seja um UUID, cada tarefa deverá estar no seguinte formato:

"team": {
	"team_id": "",
	"teamName": "",
	"city": "",
	"country": "",
	"created_at": ""
}

#### ListUsersAndTeams.routes: Get - `/listUsersAndTeams/:user_id`

- A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os dados do usuário e todos os times cadastrados desse usuário.

#### ListUserSpecifTeam.routes: Get - `/listUserSpecifTeam/:team_id`

- A rota deve receber, pelo header da requisição, uma propriedade `team_id` contendo o `id` do time que deseja ser consultado, e o `user_id` do usuário que efetuo o cadastrado do time a ser consultado, pelo parâmetro de consulta `query`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados.

#### DeleteSpecificUserTeam.routes: Delete - `/deleteSpecificTeam/:team_id`

- A rota deve receber, pelo header da requisição, uma propriedade `team_id` contendo o `id` do time que deseja ser consultado, e o `user_id` do usuário que efetuo o cadastrado do time a ser consultado, pelo parâmetro de consulta `query`, essa rota só pode concluir a exclusão com sucesso, caso os dois parâmetros passados anteriormente sejam válidados.

## Para rodar essa aplicação siga os seguintes passos:

- Copie a url do repositório na aba `CODE`.
- Com o git instalado, execute o seguinte comando => `git clone "Aqui vai a url copiada acima`.
- Com o `Nodejs` e o `Yarn` instalados, Na sua IDE preferida, abra o terminal do `git`, e execute o seguinte comando => `yarn`, para baixar as dependências da aplicação.
- Para rodar o projeto execute o seguinte comando => `yarn dev`.
- Para testar o funcional da aplicação será necessário instalar o software `Insomnia` e criar as rotas da aplicação citadas acima.
- Para rodar os testes integrados das rotas da aplicação execute o seguinte comando => `yarn test`.

## Para rodar a Documentação da Aplicação

- Com a aplicação já startada ... No seu navegador de internet digite => `http://localhost:8080/api-doc`