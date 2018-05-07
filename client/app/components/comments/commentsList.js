import React from 'react';
import {Component} from 'react';
import Comment from "./comment";

class CommentsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="comments-list">
            <ul>
                {this.props.comments && this.props.comments.map((c, i) => {
                    return <li key={`comment${i}`}><Comment email={c.email} message={c.message}/></li>
                })}
            </ul>
        </div>;
    }
}

export default CommentsList;