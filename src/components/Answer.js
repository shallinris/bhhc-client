import React from 'react';
import './Answer.css';

/**
 * Provides a component for rendering answers
 */

class Answer extends React.Component {
    render() {
        return (
            <div className="answer">
                <div className="id">
                    {this.props.id}
                </div>
                <div className="text">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Answer;