import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

class Author extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <figure className="author">
            Last activity: <time className="last-activity">{this.props.lastActivity}</time>
        </figure>;
    }
}

Author.propTypes = {
    lastActivity: PropTypes.string.isRequired,
};

export default Author;