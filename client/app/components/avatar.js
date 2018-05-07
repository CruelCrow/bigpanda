import React from 'react';
import {Component} from 'react';
import moment from 'moment';
import md5 from 'md5';
import BigPandaApi from "../api/bigpanda";
import Author from "./comments/author";

class Avatar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isTooltipVisible: false,
            lastActivity: null
        };

        this.showLastActivity = this.showLastActivity.bind(this);
        this.handleHideTooltipClick = this.handleHideTooltipClick.bind(this);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleHideTooltipClick);
    }

    async showLastActivity(event) {
        if (!this.state.isTooltipVisible) {
            // We don't really need to connect Avatar to Redux, because request for the lastActivity is really completely isolated for Avatar component.
            // This way it is much simpler.
            const res = await BigPandaApi.getAuthor(this.props.email);

            if (res.data && res.data.lastActivity) {
                this.setState({
                    isTooltipVisible: true,
                    lastActivity: res.data.lastActivity,
                });
                document.addEventListener('mousedown', this.handleHideTooltipClick); //hide when clicking anywhere
            }
        }
    }

    handleHideTooltipClick() {
        this.setState({
            isTooltipVisible: false,
            lastActivity: null
        });
    }

    render() {
        return <div className="avatar"
                 style={{backgroundImage: `url('https://www.gravatar.com/avatar/${md5(this.props.email)}')`}}
                 onClick={this.showLastActivity} {...this.props}>
                {this.state.isTooltipVisible && <div className="author-tooltip">
                    <Author lastActivity={moment(this.state.lastActivity).format('MMMM Do YYYY, h:mm:ss a')}/>
                </div>}
            </div>;
    }
}

export default Avatar;