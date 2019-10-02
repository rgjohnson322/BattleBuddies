UPDATE users
SET img = $1,
    about= $2
WHERE id = $3
returning *;