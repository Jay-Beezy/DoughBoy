import React from 'react';
import { AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import '../App.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class DoughBoy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rowData: [
                { daysOut: 5, futureDate: this.daysAhead(5) },
                { daysOut: 6, futureDate: this.daysAhead(6) },
                { daysOut: 7, futureDate: this.daysAhead(7) },
                { daysOut: 8, futureDate: this.daysAhead(8) },
                { daysOut: 10, futureDate: this.daysAhead(10) },
                { daysOut: 14, futureDate: this.daysAhead(14) },
                { daysOut: 18, futureDate: this.daysAhead(18) },
                { daysOut: 21, futureDate: this.daysAhead(21) },
                { daysOut: 30, futureDate: this.daysAhead(30) },
                { daysOut: 40, futureDate: this.daysAhead(40) },
                { daysOut: 45, futureDate: this.daysAhead(45) },
                { daysOut: 90, futureDate: this.daysAhead(90) },
            ],
            colData: [
                {field:"daysOut", sortable: true, sort: 'asc', sortingOrder: ['asc', 'desc'], width:155, cellStyle: {color: 'yellow', fontSize: '15px'}},
                {field:"futureDate", width:155, cellStyle: {color: 'yellow', fontSize: '15px'}}
            ]
        };
    }

    daysAhead = function(day) {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + day);
        let current_day = targetDate.getDate();
        let current_month = targetDate.getMonth() + 1; //0 is January
        //let current_year = targetDate.getFullYear();
        let testy = this.getMonth(current_month);
        let dateString = testy + ' ' + current_day; // + ' ' + current_year + '';
        return dateString;
    }

    getMonth = function(day) {
        if (day === 1) {
            return 'Jan';
          }
          if (day === 2) {
            return 'Feb';
          }
          if (day === 3) {
            return 'March';
          }
          if (day === 4) {
            return 'April';
          }
          if (day === 5) {
            return 'May';
          }
          if (day === 6) {
            return 'June';
          }
          if (day === 7) {
            return 'July';
          }
          if (day === 8) {
            return 'Aug';
          }
          if (day === 9) {
            return 'Sept';
          }
          if (day === 10) {
            return 'Oct';
          }
          if (day === 11) {
            return 'Nov';
          }
          if (day === 12) {
            return 'Dec';
          }
    }

    getFutureDate = () => {
        var int_day = parseInt(document.getElementById("myFutureInput").value, 10);
        var final_day = this.daysAhead(int_day);

        console.log(int_day);

        if(isNaN(int_day) === false){ //Validates that a number is being passed in
            this.setState((prevState, props) => {
                const newRow = {
                    daysOut: int_day,
                    futureDate: final_day
                }
                return { rowData : [...this.state.rowData, newRow] };
            });
        }
    }

    /*
    onCellDoubleClicked = (params: CellDoubleClickedEvent) => {
        console.log('Cell was double clicked');
    }
    */

    render() {
        const {showModal} = this.props;
        return (
            <React.Fragment>
            <div className="title">
            <span role="img" aria-label="Bread">🍞</span> DoughBoy <span role="img" aria-label="Baguette">🥖</span>
            </div>
            <div className="ag-theme-alpine" style={{ height: '600px', width: '312px' }}>
                <AgGridReact className="AgGridReact"
                    rowData={this.state.rowData}
                    columnDefs={this.state.colData}
                    onCellDoubleClicked={this.onCellDoubleClicked}
                    >
                </AgGridReact>
            </div>
            <br></br>
            <div className="popup">
                <Popup id="Submit_Window" className="windowPopup" 
                contentStyle={{
                    background: '#128b22',
                    border: '2px solid black',
                    padding: '10px 10px'
                }}
                overlayStyle={{
                    
                }}
                arrowStyle={{
                    color: '#128b22',
                }}
                trigger={<button> Add Entry </button>} position="bottom center"
                >
                <div className="windowText">Enter Days Out
                <input type="number" id="myFutureInput"></input>
                <td onClick={this.getFutureDate}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Submit</td>
                </div>
                </Popup>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
     </React.Fragment>
        );
    }
}

export default DoughBoy;