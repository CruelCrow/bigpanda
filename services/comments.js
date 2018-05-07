const CommentModel = require('../models/comment');

class CommentsService {
    static async add(commentData) {
        return CommentModel.create(commentData);
    }

    static async list(email = null) {
        if (email) {
            return CommentsService.filterByEmail(email);
        } else {
            return CommentModel.find({});
        }
    }

    static async filterByEmail(email) {
        return CommentModel.find({email});
    }
}

module.exports = CommentsService;