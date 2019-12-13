import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Inventory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1" />
                    <div className="col-md-10">
                        <h3 className="section-title">Inventory information</h3>
                    </div>
                </div>
                <div className="row mtop-smaller">
                    <div className="col-md-1" />
                    <div className="col-md-10">
                        <table className="table">
                            <thead>
                                <tr className="table-header">
                                    <th scope="col" className="centered">Product Name</th>
                                    <th scope="col" className="centered">Quantity</th>
                                    <th scope="col" className="centered">Price per unit</th>
                                    <th scope="col" className="centered">Total value</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-1" />
                </div>
            </div>
        )
    }
}
export default Inventory;
