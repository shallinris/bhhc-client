import React, { Component } from 'react';
import './App.css';
import AnswerList from './components/AnswerList'
import {CardHeader} from "@material-ui/core";

const ReactDOM = require('react-dom');
// const client = require('./client');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {answers: []};
    }

    //response comes back as an array
    //need to get body from response
    //fetch now part of JS(url,
    componentDidMount() {
        fetch('http://localhost:8080/answer').then(response => {
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

