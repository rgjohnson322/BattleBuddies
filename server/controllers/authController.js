const bcrypt = require('bcryptjs');

module.exports = {


    regUser: async (req, res) => {
        //makes camelcase for front end and destructures to body
        const { username, password, firstName, lastName, isVolunteer } = req.body
        const db = req.app.get('db');
        db.checkForTakenUsernameOrEmail(username, email).then(count => {
            if (+count[0].count === 0) {
                bcrypt.hash(password, 12).then(hash => {
                    db.regUser(firstName, lastName, email, isVolunteer, username, hash).then(() => {
                        req.session.user = {
                            username,
                            firstName,
                            lastName,
                            email,
                            isEmployer
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
            const { firstName, lastName, email, isVolunteer } = user[0];
            console.log(user[0]);
            bcrypt.compare(password, hash).then(areSame => {
                if (areSame) {
                    req.session.user = {
                        username,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        isEmployer: isVolunteer
                    }
                    res.status(200).json(req.session.user);
                } else {
                    res.status(401).json({
                        error: "Username or Password incorrect"
                    })
                }
            })
        })
    }
}