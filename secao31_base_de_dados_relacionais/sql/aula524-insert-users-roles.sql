INSERT INTO users_roles (user_id, role_id)
VALUES
(110, 4);

SELECT user_id, role_id  from users_roles WHERE
user_id = 110 and role_id = 4;

select 
id, 
(select id from roles order by rand() limit 1) as qualquer 
from users;

insert into users_roles (user_id, role_id)
select 
id, 
(select id from roles order by rand() limit 1) as qualquer 
from users;
