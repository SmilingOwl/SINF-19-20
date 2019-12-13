import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { numberWithSpaces } from '../common/Math';

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stock: {},
        };
    }
    UNSAFE_componentWillMount() {
        this.fetchStockInfoTable();
    }

    fetchStockInfoTable() {
        fetch("http://localhost:9000/inventory")
            .then(res => res.json())
            .then(res => {
                this.setState({ stock: res })
            })
    }

    fillStockTable() {
        let stockTable = [];
        if (!this.state.stock)
            return [];
        console.log(this.state.stock);
        for (let i = 1; i <= this.state.stock.length && i <= 10; i++) {
            stockTable.push(
                <tr className="table-row" key={i}>
                    <th> </th>
                    <td scope="row">
                        <Link to={{pathname: `/products/${this.state.stock[i].code}` }}>
                            {this.state.stock[i].name}
                        </Link>
                    </td>
                    <td>{numberWithSpaces(this.state.stock[i].quantity)}</td>
                    <td>{numberWithSpaces(this.state.stock[i].unitPrice.toFixed(2))} € </td>
                    <td>{numberWithSpaces(this.state.stock[i].totalValue.toFixed(2))} € </td>
                </tr>
            );
        }
        return stockTable;
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
                                    <th scope="col"/>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price per unit</th>
                                    <th scope="col">Total value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.fillStockTable()}
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
