/*
-- Seleciona a base de dados
USE base_de_dados;
-- Mostra as tabelas da base de dados
SHOW tables;
-- Descreve as colunas da tabela
DESCRIBE users;
-- Inserir registros na base de dados
INSERT INTO users
(first_name, last_name, email, password_hash) VALUES
("Joao", "H.", "1@email.com", "1_hasgh"),
("Filipe", "R.", "2@email.com", "2_hasgh"),
("Helena", "A.", "3@email.com", "3_hash"),
("Joana", "B.", "4@email.com", "4_hash"),
("Rosana", "C.", "5@email.com", "5_hash");

*/

const knex = require('../config/database');

const data = [{
  first_name: 'Filipe',
  last_name: 'E.',
  email: '2@email.com',
  password_hash: '2_hasgh',
  salary: 2481.12
}, {
  first_name: 'Helena',
  last_name: 'F.',
  email: '3@email.com',
  password_hash: '3_hasgh',
  salary: 7881.12
}, {
  first_name: 'Joana',
  last_name: 'A.',
  email: '4@email.com',
  password_hash: '4_hasgh',
  salary: 1061.12
}, {
  first_name: 'Rosana',
  last_name: 'V.',
  email: '5@email.com',
  password_hash: '5_hasgh',
  salary: 4651.12
},
];

const insert = knex('users').insert(data);

// console.log(insert.toString());
// console.log(insert.toSQL().toNative());

insert.then(data => {
  console.log(data);
}).catch(e => {
  console.log('ERRO', e.message);
}).finally(() => {
  knex.destroy();
})
