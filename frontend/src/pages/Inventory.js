import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Inventory extends Component
{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-1"/>
                    <div className="col-md-10">
                        <h3 className="section-title">Inventory Information</h3>
                    </div>
                </div>
            </div>
        )
    }
}
export default Inventory;
