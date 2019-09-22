import React, { Component } from 'react';
import './App.css';

import AnswerList from './components/AnswerList'

/**
 * Renders a list of answers by hitting the /answers api endpoint
 */

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {answers: []};
    }

    //response comes back as an array
    //need to get body from response
    //fetch now part of JS(url,
    componentDidMount() {
        fetch('http://localhost:8080/answers').then(response => {
            return response.json();
            // this.setState({answers: response.entity._embedded.answers});
        }).then(data=>{this.setState({answers:data})})
    }

    render() {
        return (
            <div>
                <header class="header"><img class = "img" src='https://www.bhhc.com/media/39006/logo.png'/></header>
                <div class="title">
                    <h1>Why I want to work for BHHC</h1>
                </div>
                <AnswerList answers={this.state.answers}/>
            </div>
        )
    }
}
export default App;

