-- between seleciona um range
SELECT * FROM users
WHERE 
created_at BETWEEN 
'2020-06-12 00:00:00' 
AND '2020-09-04 23:59:59'
AND id BETWEEN 163 AND 210;