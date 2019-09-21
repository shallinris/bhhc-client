import React, { Component } from 'react';
import './App.css';
import AnswerList from './components/AnswerList'
const ReactDOM = require('react-dom');

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
            <AnswerList answers={this.state.answers}/>
        )
    }
}
export default App;

