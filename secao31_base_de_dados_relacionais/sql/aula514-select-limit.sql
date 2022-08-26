-- limit limita a qtd de valores
-- offset desloca o cursor para exibir os resultados
SELECT id, first_name, email as uemail 
FROM users
WHERE id BETWEEN 50 AND 150
ORDER BY id ASC
LIMIT 9,3;