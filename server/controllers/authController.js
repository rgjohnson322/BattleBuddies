const bcrypt = require('bcryptjs');

module.exports = {


    regUser: async (req, res) => {
        //makes camelcase for front end and destructures to body
        const { username, password, firstName, lastName, email, isVolunteer } = req.body
        const db = req.app.get('db');
        db.checkForTakenUsernameOrEmail(username, email).then(count => {
            if (+count[0].count === 0) {
                bcrypt.hash(password, 12).then(hash => {
                    db.regUser( firstName, lastName, email, isVolunteer, username, hash).then((users) => {
                        req.session.user = {
                            id: users[0].id,
                            username,
                            firstName,
                            lastName,
                            email,
                            isVolunteer
                        }
                        res.status(200).json(req.session.user);
                    })
                })
            } else {
                res.status(409).json({
                    error: "Username or Email already exists, please log in with your account."
                })
            }
        })
    },
    loginUser: function (req, res) {
        const { username, password } = req.body;
        const db = req.app.get("db");
        db.getPasswordViaUsername(username).then(user => {
            let hash = user[0].password;
            const { id, firstname, lastname, email, is_volunteer } = user[0];
            console.log(user[0]);
            bcrypt.compare(password, hash).then(areSame => {
                if (areSame) {
                    req.session.user = {
                        id: id,
                        username: username,
                        firstName: firstname,
                        lastName: lastname,
                        email: email,
                        isVolunteer: is_volunteer
                    }
                    res.status(200).json(req.session.user);
                } else {
                    res.status(401).json({
                        error: "Username or Password incorrect"
                    })
                }
            })
        })
    },
    logoutUser: function (req,res) {
        req.session.destroy()
        res.sendStatus(200)
    }
}