-- in seleciona elementos entre os valores enviados
SELECT * FROM users
WHERE id IN (7,10,15,20,25,30,100,12200,1212545)
AND first_name IN ('Filipe', 'Keelie');