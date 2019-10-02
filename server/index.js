require ('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const authController = require('./controllers/authController.js')
const petController = require ('./controllers/petController')
const profileController = require ("./controllers/profileController.js")

app.use(express.json())


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db on---------------')
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 24 * 7
    }

}))
//register and login paths
app.post("/auth/register", authController.regUser)
app.post("/auth/login", authController.loginUser)
app.get("/auth/user", (req, res) => {
    res.status(200).json(req.session.user);
})
app.delete("/auth/logout", authController.logoutUser)

//pets
app.post("/api/pet", petController.addPet)
app.post("/api/petupdate", petController.petUpdate)
app.get("/api/getpetbyid", (req, res, next) => {
    console.log(2);
    next();
}, petController.getPetById)

//profile
app.post("/api/profileupdate", profileController.updateProfile)





app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})