-- insert select
-- insere valores em uma tabela usando outra
INSERT INTO profiles
(bio, description, user_id)
SELECT 
concat('Bio de ', first_name), 
concat('Description de', ' ', first_name), 
id 
FROM users;
