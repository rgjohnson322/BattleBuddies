DELETE FROM pets
WHERE id = $1;

-- SELECT * FROM pets
-- INNER JOIN users
-- ON pets.user_id=users.id
-- WHERE user_id = $2
-- ORDER BY pets.id;