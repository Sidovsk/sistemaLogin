# sistemaLogin
Sistema de login/cadastro de usuários criado como trabalho para disciplina de Sistemas Distribuídos <br>
Para executar, no terminal, com npm, node e mongodb instalados, digite os comandos:
  1. nano .env <br>
  2. No nano, defina as variáveis, como no seguinte exemplo: <br>
    DB_HOST=localhost <br>
    DB_PORT=27017 <br>
    DB_NAME=users <br>
    PORT=8080 <br>
    SALT_ROUNDS=11 <br>
    JWT_SECRET=qualquercoisa <br>
  3. npm i <br>
  4. npm start
