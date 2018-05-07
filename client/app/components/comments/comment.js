import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from "../avatar";

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <figure className="comment">
            <Avatar email={this.props.email} />
            <div className="email">{this.props.email}</div>
            <div className="message">{this.props.message}</div>
        </figure>;
    }
}

Comment.propTypes = {
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Comment;