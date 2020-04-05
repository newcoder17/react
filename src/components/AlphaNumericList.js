import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { TableSimple } from 'react-pagination-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


class AlphaNumericList extends Component {
    constructor(props) {
        super(props);

    }
    state = {}
    render() {
        return (
            <div className="col-8">
                {/* <div></div> */}
            <Table striped bordered hover  size="sm">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                    </tr>
                </thead>

                <tbody>
                    {(this.props.droplets.length > 0) ? this.props.droplets.map((droplet, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{droplet}</td>
                            </tr>
                        )
                    }) : <tr><td colSpan="5">No Combinations Available!</td></tr>}
                </tbody>
            </Table>
        </div>);
    }
}

export default AlphaNumericList;