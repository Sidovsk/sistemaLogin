# sistemaLogin
Sistema de login/cadastro de usuários criado como trabalho para disciplina de Sistemas Distribuídos <br>
Para executar, no terminal, com npm e node instalados, digite os comandos:
  1. nano .env e defina as variáveis, como no seguinte exemplo:
    DB_HOST=localhost <br>
    DB_PORT=27017 <br>
    DB_NAME=users <br>
    PORT=8080 <br>
    SALT_ROUNDS=11 <br>
    JWT_SECRET=qualquercoisa <br>
  2. npm i <br>
  3. npm start
