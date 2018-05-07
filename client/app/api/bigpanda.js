import axios from 'axios';

export default class BigPandaApi {
    static getComments(email = null) {
        if (email) {
            return axios.get(`/api/comments?email=${email}`);
        } else {
            return axios.get('/api/comments');
        }
    }

    static postComment(email, message) {
        return axios.post('/api/comments', {email, message});
    }

    static getAuthor(email) {
        return axios.get(`/api/author?email=${email}`);
    }
}