module.exports = {


    updateProfile: async (req,res) => {
        const {proimg, proabout} = req.body
        const db = req.app.get('db');
        const {user} = req.session
        const users = await db.updatePro(proimg, proabout, user.id)
        res.status(200).json(users)
    },
    getUser: async (req, res) => {
        const {id} = req.params;
        const db = req.app.get("db");
        const user = await db.getUserById(id);
        res.status(200).json(user[0]);
    }
}