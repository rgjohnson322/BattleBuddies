INSERT INTO users
(firstname, lastname, email, is_volunteer, username, password)
VALUES
($1, $2, $3, $4, $5, $6)
returning id;