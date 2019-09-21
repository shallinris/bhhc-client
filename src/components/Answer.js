import React from 'react';

/**
 * Provides an answer component.
 */
class Answer extends React.Component {
    render() {
        const style = {
            rows: {
                height: '80px',
                padding: '40px',
                backgroundColor: '#f7f9f9',
                fontSize: '18px',
            },
            colums: {
                padding: '50px',
            },
            table: {
                // border: '1px solid grey',
                textAlign: 'center',
            },
            div: {
                display: 'flex',
                justifyContent: 'center',
            }
        };

        return (
            // <div class="answer">
            //     <div class="id">
            //         {this.props.answer.id}
            //     </div>
            //     <div class="text">
            //         {this.props.answer.text}
            //     </div>
            // </div>

            <tr>
                <td style={style.rows}>{this.props.answer.id}</td>
                <td style={style.rows}>{this.props.answer.text}</td>
                {/*<td>{this.props.employee.description}</td>*/}
            </tr>
        )
    }
}

export default Answer;