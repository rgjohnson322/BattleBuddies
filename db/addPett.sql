INSERT INTO pets
(img, name, state, duration, type, breed, about, user_id )
VALUES
($1, $2, $3, $4, $5, $6, $7, $8);


SELECT * FROM pets
ORDER BY pets.id;