import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class AlphaNumericList extends Component {
    constructor(props) {
        super(props);

    }
    state = {}
    render() {
        return (
            <div className="col-4">
    <BootstrapTable
          data={ this.props.droplets }
          pagination>
          <TableHeaderColumn dataAlign='center' headerAlign='center' dataField='id' isKey={ true }> SNo</TableHeaderColumn>
          <TableHeaderColumn dataAlign='center' headerAlign='center' dataField='combination'>List</TableHeaderColumn>
        </BootstrapTable>

            </div>
        );
    }
}

export default AlphaNumericList;