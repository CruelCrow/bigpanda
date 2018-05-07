const AuthorsService = require('../../services/authors');

class AuthorsController {

    static async get(req, res) {
        try {
            const doc = await AuthorsService.get(req.query.email);
            res.json(doc);
        } catch (e) {
            res.status(500);
            res.json(e);
        }
    }
}

module.exports = AuthorsController;