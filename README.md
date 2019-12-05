# sistemaLogin
Sistema de login/cadastro de usuários criado como trabalho para disciplina de Sistemas Distribuídos <br>
Para executar, no terminal, com npm e node instalados, digite os comandos:
  1. nano .env e defina as variáveis, como no seguinte exemplo:
    DB_HOST=localhost
    DB_PORT=27017
    DB_NAME=users
    PORT=8080
    SALT_ROUNDS=11
    JWT_SECRET=qualquercoisa
  2. npm i
  3. npm start
