import React, { Component } from 'react';

import './AnswerList.css';
import Answer from './Answer';

/**
 * Provides a component for rendering a list of answers.
 */
class AnswerList extends Component {

    render() {
        //each component has unique key --making below unique identifier
        const answers = this.props.answers.map(answer =>
            <Answer id={answer.id} text={answer.text}/>
        );

        return (
            <div class="answer-list">
                {answers}
            </div>
        )
    }
}

export default AnswerList;