-- Seleciona users.id, profiles.id, profiles.bio
-- profiles.description, users.first_name
-- da tabela users e da tabela profiles
-- onde o id do usuário for o mesmo que
-- o user_id de profiles
SELECT u.id AS uid, p.id AS pid,
p.bio, u.first_name 
FROM users AS u, profiles AS p
WHERE u.id = p.user_id;