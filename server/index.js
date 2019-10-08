require('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive')
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const authController = require('./controllers/authController.js')
const petController = require('./controllers/petController')
const profileController = require("./controllers/profileController.js")
const donationController= require('./controllers/donationController')
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripeSecretKey);
const uuid = require('uuid/v4')
var cors = require('cors')


app.use(express.json());
app.use(cors())
app.use( express.static( `${__dirname}/../build` ) );




massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db on---------------')
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
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
app.put("/api/petupdate", petController.petUpdate)
app.get("/api/getpetbyid", petController.getPetById)
app.get("/api/allpets", petController.getAllPets)
app.delete("/api/pet/:id", petController.deletePet)
app.get("/api/pet/:id", petController.getTheirPets)

//profile
app.put("/api/profileupdate", profileController.updateProfile)
app.get("/api/user/:id", profileController.getUser)

//stripe
app.post("/api/checkout", async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try {
        const { product, token } = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotency_key = uuid();
        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `Made a ${product.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            {
                idempotency_key
            }
        );
        console.log("Charge:", { charge });
        status = "success";
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

    res.json({ error, status });
});

//donations
app.get("/api/donations", donationController.getAllDonations)
app.post("/api/adddonation", donationController.addDonation)





app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})