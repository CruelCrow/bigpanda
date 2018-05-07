import BigPandaApi from "../api/bigpanda";

export const GET_COMMENTS = 'comments/GET_COMMENTS';
export const START_POST_COMMENT = 'comments/START_POST_COMMENT';
export const POST_COMMENT = 'comments/POST_COMMENT';
export const GET_AUTHOR = 'comments/GET_AUTHOR';

const initialState = {
    comments: [],
    isPosting: false,
    errorPost: null,
    errorGet: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_COMMENTS:
            if (action.error) {
                return {
                    ...state,
                    errorGet: action.payload.response.data.message,
                };
            } else {
                return {
                    ...state,
                    errorGet: null,
                    comments: action.payload.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
                };
            }

        case START_POST_COMMENT:
            return {
                ...state,
                errorPost: null,
                isPosting: true,
            };

        case POST_COMMENT:
            if (action.error) {
                return {
                    ...state,
                    isPosting: false,
                    errorPost: action.payload.response.data.message,
                };
            } else {
                let comments = state.comments;
                comments.unshift(action.payload.data);
                return {
                    ...state,
                    isPosting: false,
                    errorPost: null,
                    comments: comments,
                };
            }

        default:
            return state;
    }
};

export const actions = {
    getComments: (email = null) => {
        const res = BigPandaApi.getComments(email);
        return {
            type: GET_COMMENTS,
            payload: res
        }
    },

    postComment: (email, message) => {
        require('../store').default.dispatch({
            type: START_POST_COMMENT
        });
        const res = BigPandaApi.postComment(email, message);
        return {
            type: POST_COMMENT,
            payload: res
        }
    },

    getAuthor: (email) => {
        const res = BigPandaApi.getAuthor(email);
        return {
            type: GET_AUTHOR,
            payload: res
        }
    }
};