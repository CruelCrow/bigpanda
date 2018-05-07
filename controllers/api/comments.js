const CommentsService = require('../../services/comments');

class CommentsController {

    static async create(req, res) {
        try {
            const doc = await CommentsService.add(req.body);
            res.json(doc);
        } catch (e) {
            res.status(500);
            res.json(e);
        }
    }

    static async list(req, res) {
        try {
            const docs = await CommentsService.list(req.query.email);
            res.json(docs);
        } catch (e) {
            res.status(500);
            res.json(e);
        }
    }
}

module.exports = CommentsController;