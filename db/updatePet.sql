UPDATE pets
SET img = $1,
    name= $2,
    state= $3,
    duration = $4,
    type=$5,
    breed=$6,
    about= $7
WHERE id = $8;

-- SELECT * FROM pets
-- ORDER BY pets.id;

SELECT pets.*, users.username, users.email
FROM pets 
INNER JOIN users
ON pets.user_id=users.id
WHERE user_id = $9
ORDER BY pets.id;