import React from 'react';

class Answer extends React.Component{
    render() {

        const style = {
            rows: {
                height: '80px',
                padding: '40px',
                backgroundColor: '#f7f9f9',
                fontSize: '18px',
                // fontStyle: 'italic'
            },
            colums: {
                padding: '50px',

            },
            table: {
                // border: '1px solid grey',
                textAlign: 'center',
                fontWeight: 'bold'
            },
            div: {
                display: 'flex',
                justifyContent: 'center',
            }
        };

        return (
            <tr>
                <td style={style.rows}>{this.props.answer.id}</td>
                <td style={style.rows}>{this.props.answer.answer}</td>
                {/*<td>{this.props.employee.description}</td>*/}
            </tr>
        )
    }
}

export default Answer;