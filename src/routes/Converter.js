import React from 'react';
import { AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import '../App.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Converter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rowData: [
                { ounces: 1, pounds: 1/16 },
                { ounces: 2, pounds: 2/16 },
                { ounces: 3, pounds: 3/16 },
                { ounces: 4, pounds: 4/16 },
                { ounces: 5, pounds: 5/16 },
                { ounces: 6, pounds: 6/16 },
                { ounces: 7, pounds: 7/16 },
                { ounces: 8, pounds: 8/16 },
                { ounces: 9, pounds: 9/16 },
                { ounces: 10, pounds: 10/16 },
                { ounces: 11, pounds: 11/16 },
                { ounces: 12, pounds: 12/16 },
                { ounces: 13, pounds: 13/16 },
                { ounces: 14, pounds: 14/16 },
                { ounces: 15, pounds: 15/16 },
                { ounces: 16, pounds: 16/16 },
            ],
            colData: [
                {field:"ounces", width:155, cellStyle: {color: 'yellow', fontSize: '15px'}},
                {field:"pounds", width:155, cellStyle: {color: 'yellow', fontSize: '15px'}}
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
            <div className="title">
            Ounce Converter
            </div>
            <div className="ag-theme-alpine" style={{ height: '750px', width: '312px' }}>
                <AgGridReact className="AgGridReact"
                    rowData={this.state.rowData}
                    columnDefs={this.state.colData}
                    onCellDoubleClicked={this.onCellDoubleClicked}
                    >
                </AgGridReact>
            </div>
            <br></br>
     </React.Fragment>
        );
    }
}

export default Converter;