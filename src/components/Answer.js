import React from 'react';

import './Answer.css';

/**
 * Provides a component for rendering answers.
 */
class Answer extends React.Component {
    render() {
        return (
            <div class="answer">
                <div class="id">
                    {this.props.id}
                </div>
                <div class="text">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Answer;