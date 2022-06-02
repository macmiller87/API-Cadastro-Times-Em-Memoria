## API de cadastro de Usuários e Times em memória.

## Está em desenvolvimento ... 🚀

### 💻 Projeto

- Nesta aplicação está sendo feita uma API, que é possível cadastrar `usuário com (username, userAvatar)`, a aplicação gera um `user_id` único randômico para o usúario, também é possível cadastrar `times de futebol com (nome, cidade e pais)`,a aplicação gera um `team_id` único randômico para o time, desde que exista um `usuário` já cadastrado para poder fazer o cadastro dos times, essa verificação é feita pelo `user_id` do usuário, também é possível listar todos usuários criados, e seus respectivos times cadastrados .....

### Rotas da aplicação

#### CreateUsers.routes: Post - `/createUser` 

- A rota deve receber `username` e `userAvatar` dentro do corpo da requisição. Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto no seguinte formato:   

"user": {
	"user_id": "",
	"username": "",
	"userAvatar": "",
	"created_at": "",
	"userTeams": []
}

#### CreateUsersTeams.routes: Post - `/createUserTeam/:user_id`

- A rota deve receber `teamName`, `city` e `country` dentro do corpo da requisição e, uma propriedade `user_id` contendo o `id` do usuário dentro do header da requisição. Ao criar um novo Time, ele deve ser armazenada dentro da lista `userTeams` do usuário que está cadastrando essa time, Certifique-se que o ID seja um UUID, cada tarefa deverá estar no seguinte formato:

"team": {
	"team_id": "",
	"teamName": "",
	"city": "",
	"country": "",
	"created_at": ""
}

#### ListUsersAndTeams.routes: Get - `/listUsersAndTeams/:user_id`

- A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os dados do usuário e todos os times cadastrados desse usuário.