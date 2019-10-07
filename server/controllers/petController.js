module.exports = {



    addPet: async (req,res) => {
        const {img, name, location, duration, type, breed, about} = req.body
        const db = req.app.get('db');
        const {user} =req.session
        const pet = await db.addPett(img, name, location, duration, type, breed, about, user.id)
        res.status(200).json(pet)
    },
    petUpdate: async(req,res) => {
        const {img, name, location, duration, type, breed, about, id} = req.body
        console.log(req.body)
        const db = req.app.get('db');
        // const {user} =req.session
        const pet = await db.updatePet(img, name, location, duration, type, breed, about, id)
        res.status(200).json(pet)
    },
    getPetById: async (req,res) => {
        const {user} =req.session
        const db = req.app.get('db');
        const pet = await db.getPetById(user.id)
        res.status(200).json(pet)
        },
    getAllPets: async (req,res) => {
        const db = req.app.get('db');
        const allpets= await db.getAllPets()
        res.status(200).json(allpets)
    },
    deletePet: async (req,res) => {
        const id = +req.params.id;
        console.log(id)
        const db = req.app.get("db");
            await db.deletePet(id, req.session.user.id)
                const pets = await db.getPetById(req.session.user.id);
                    res.status(200).json(pets);
            
        
    }

    
}