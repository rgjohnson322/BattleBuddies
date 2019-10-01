module.exports = {



    addPet: async (req,res) => {
        const {name, location, duration, type, breed, about} = req.body
        const db = req.app.get('db');
        const {user} =req.session
        const pet = await db.addPett(name, location, duration, type, breed, about, user.id)
        res.status(200).json(pet)
    }
}