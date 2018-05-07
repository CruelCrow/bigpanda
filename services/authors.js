const CommentModel = require('../models/comment');

class AuthorsService {
    static async get(email) {
        return CommentModel.findOne({email}).sort({createdAt: -1}).limit(1).then(c => {
            return {
                email: c.email,
                lastActivity: c.createdAt
            }
        });
    }
}

module.exports = AuthorsService;