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
            CardHeader: {
                backgroundColor: '#285171',
            },
            h1: {
                color: '#285171',
                textAlign: 'center',
                fontFamily: 'Titillium Web',
                marginTop: '40px',
            },
            Grid: {
                padding: '40px',
                // textAlign: 'center'
            },
            table: {
                margin: '0 auto',
                textAlign: 'center',
                width: '100%',
            },
            rows: {
                height: '80px',
                // padding: '40px',
                color: 'white',
                backgroundColor: '#285171'
            },
            // columns: {
            //
            // },
        };


        return (
            <Card>
                <CardHeader style={style.CardHeader}/>
                <h1 style ={style.h1}>Hi 👋 I'm Shallin, and this is why I want to work at BHHC</h1>
                <Grid style={style.Grid}item xs={12}>
                <table style={style.table}>
                    <tbody>
                    <tr style={style.rows}>
                        <th>Answer Number</th>
                        <th>Why
                            <div>
                                <img src='https://www.kzib.com/wp-content/uploads/sites/319/2019/02/KZIB-Carriers-BHHC.jpeg' alt='logo' width='45' height='45'/>
                            </div>

                        </th>
                    </tr>
                    {answers}
                    </tbody>
                </table>
                </Grid>
                <CardHeader style={style.CardHeader}/>
            </Card>
        )
    }
}

export default AnswerList;