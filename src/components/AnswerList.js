import React, { Component } from 'react';
// import DataTable from 'react-data-table-component';
import Answer from './Answer';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';

class AnswerList extends Component {

    render() {
        //each component has unique key --making below unique identifier
        const answers = this.props.answers.map(answer =>

            <Answer key={answer.id} answer={answer}/>
        );

        const style = {
            rows: {
                height: '80px',
                padding: '40px',
                color: 'white',
                backgroundColor: '#285171',


            },
            colums: {

            },
            table: {
                textAlign: 'center',
            },

            Grid: {
                padding: '40px',
            },
            CardHeader: {
                backgroundColor: '#285171',
            }
        };


        return (
            <Card>
                <CardHeader style={style.CardHeader}/>
                <Grid style={style.Grid}item xs={12}>
                <table style={style.table}>
                    <tbody>
                    <tr style={style.rows}>
                        <th style={style.columns}>Answer Id</th>
                        <th style={style.columns}>Why I Want To Work At BHHC
                            <div>
                                <img src='../images/bhhc-logo.png' alt='logo'/>
                            </div>

                        </th>
                        {/*<th>Description</th>*/}
                    </tr>
                    {answers}
                    </tbody>
                </table>
                </Grid>
            </Card>
        )

    }
}

export default AnswerList;