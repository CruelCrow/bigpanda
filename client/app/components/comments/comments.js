import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NewComment from "./newComment";
import {actions} from '../../modules/comments';
import CommentsList from "./commentsList";
import FilterComments from "./filterComments";

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };

        this.postComment = this.postComment.bind(this);
        this.filterComments = this.filterComments.bind(this);
    }

    componentDidMount() {
        this.props.getComments();
    }

    postComment(email, message) {
        this.props.postComment(email, message);
    }

    filterComments(email) {
        if (/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email)) {
            this.props.getComments(email);
        } else if (!email) {
            this.props.getComments();
        }
    }

    render() {
        return <div className='comments'>
            {(this.props.comments.errorGet || this.props.comments.errorPost) && <div className="errors">
                <p>{this.props.comments.errorGet}</p>
                <p>{this.props.comments.errorPost}</p>
            </div>}
            <NewComment onSubmit={this.postComment} isPosting={this.props.comments.isPosting}/>
            <FilterComments onChange={this.filterComments}/>
            <CommentsList comments={this.props.comments.comments} />
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getComments: actions.getComments,
        postComment: actions.postComment
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);