import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

class FilterComments extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="filter-comments">
            <input type="text" placeholder="Filter" onChange={event => {
                this.props.onChange(event.target.value);
            }}/>
        </div>;
    }
}

FilterComments.defaultProps = {
    onChange: () => {
    }
};

FilterComments.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default FilterComments;