import React, {Component} from 'react';
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

    /** Retrieves data from specified endpoint, then returns a response. Then the answers
     * element of the state is set equal to the response
     */
    componentDidMount() {
        fetch('http://localhost:8080/answers').then(response => {
            return response.json();
        }).then(data => {
            this.setState({answers: data})
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <header><img className="img" alt="logo"
                             src='https://www.bhhc.com/media/39006/logo.png'/></header>
                <div className="title">
                    <h1>Why I want to work for BHHC</h1>
                </div>
                <AnswerList answers={this.state.answers}/>
            </div>
        )
    }
}

export default App;

