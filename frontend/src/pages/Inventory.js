import React, { useState, useEffect } from 'react';
import {
    Row, Spinner, Alert,
} from 'reactstrap';
import axios from 'axios';
import StockTable from '../components/inventory/StockTable';

const Inventory = () => {
    const [stock, setStock] = useState({});
    const [isLoadingStock, setLoadingStock] = useState(true);
    const [hasErrorStock, setErrorStock] = useState(false);

    useEffect(() => {
        const fetchStockInfoTable = async () => {
            setErrorStock(false);
            try {
                const res = await axios.get('http://localhost:9000/inventory');
                setStock(res.data);
                setLoadingStock(false);
            } catch (error) {
                setLoadingStock(false);
                setErrorStock(true);
            }
        };
        fetchStockInfoTable();
      }, []);

      return(
        <>
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-10">
                    <h3 className="section-title">Inventory information</h3>
                </div>
            </div>
            {(() => {
                if (isLoadingStock) {
                return (
                    <Row className="center-spinner" style={{height:'auto'}}>
                        <Spinner />
                    </Row>
                );
                }
                if (hasErrorStock) {
                return <Alert color="danger">Error trying to fetch Stock</Alert>;
                }
                return <StockTable stock={stock} />;
            })()}
        </>
      );
}

export default Inventory;
