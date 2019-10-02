module.exports = {



    addPet: async (req,res) => {
        const {img, name, location, duration, type, breed, about} = req.body
        const db = req.app.get('db');
        const {user} =req.session
        const pet = await db.addPett(img, name, location, duration, type, breed, about, user.id)
        res.status(200).json(pet)
    },
    petUpdate: async(req,res) => {
        const {img, name, location, duration, type, breed, about} = req.body
        console.log(req.body)
        const db = req.app.get('db');
        const {user} =req.session
        const pet = await db.updatePet(img, name, location, duration, type, breed, about, user.id)
        res.status(200).json(pet)
    },
    getPetById: async (req,res) => {
        console.log(3);
        const {user} =req.session
        console.log(4);
        const db = req.app.get('db');
        console.log(5);
        const pet = await db.getPetById(user.id)
        console.log(6);
        res.status(200).json(pet)
        }
}