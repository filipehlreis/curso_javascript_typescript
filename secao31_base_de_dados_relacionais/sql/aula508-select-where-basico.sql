-- where filtra registros
-- operadores de comparação = < <= > >= <> !=
-- operadores lógicos and e or
SELECT * FROM users
WHERE 
created_at < '2022-08-25 22:06:18'
AND first_name = 'Joao' 
AND password_hash = '1_hash';