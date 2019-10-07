SELECT pets.*, users.username, users.email
from pets
INNER JOIN users
ON pets.user_id=users.id;