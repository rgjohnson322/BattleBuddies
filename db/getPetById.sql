SELECT pets.*, users.username, users.email
FROM pets 
INNER JOIN users
ON pets.user_id=users.id
WHERE user_id = $1
ORDER BY pets.id;