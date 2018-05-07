const mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
    email: {type: String, required: true},
    message: {type: String, required: true}
});
CommentSchema.path('email').validate(email=> {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
}, 'Wrong email');
CommentSchema.plugin(require('mongoose-createdat-updatedat'));

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;