-- Update - Atualiza registros
UPDATE users SET 
first_name = 'Filipe',
last_name = 'Reis'
WHERE id BETWEEN 19 AND 21;

SELECT * FROM users WHERE id BETWEEN 19 AND 21;