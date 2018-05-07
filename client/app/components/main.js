import React from 'react';
import {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Comments from "./comments/comments";

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <main>
                <Route path="/" render={() => (<Redirect to="/comments" />)} />
                <Route path="/comments" component={Comments} />
            </main>
        </div>;
    }
}

export default Main;