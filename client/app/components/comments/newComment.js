import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

class NewComment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            message: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isPosting && !nextProps.isPosting) {
            this.setState({
                email: '',
                message: ''
            });
        }
    }

    onSubmit(event) {
        event.preventDefault();
        if (!this.state.email || !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(this.state.email)) {
            alert('Email is incorrect');
            return;
        }
        if (!this.state.message) {
            alert('No message');
            return;
        }
        this.props.onSubmit(this.state.email, this.state.message);
    }

    render() {
        return <div className="new-comment">
            <form onSubmit={this.onSubmit}>
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={event => {
                    this.setState({
                        email: event.target.value
                    });
                }}/>
                <textarea placeholder="Message" name="message" value={this.state.message} onChange={event => {
                    this.setState({
                        message: event.target.value
                    });
                }}></textarea>
                <input type="submit" value="Submit" disabled={this.props.isPosting}/>
            </form>
        </div>;
    }
}

NewComment.defaultProps = {
    onSubmit: () => {
    }
};

NewComment.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default NewComment;