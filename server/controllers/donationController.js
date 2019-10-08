module.exports = {

    getAllDonations: async (req,res) => {
        const {user} =req.session
        const db = req.app.get('db');
        const pet = await db.getAllDonations()
        res.status(200).json(pet)
        },

    addDonation: async (req,res) => {
        console.log(req.body)
        const {price} = req.body.product
        const db = req.app.get('db');
        const donate = await db.addDonation(price)
        res.status(200).json(donate)
    }



}