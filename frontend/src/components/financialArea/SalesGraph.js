import React from 'react';
import { Line } from 'react-chartjs-2';

const SalesGraph = ({ elements }) => {
    if(elements != null) {
        for (let i = 0; i < elements.length; i++) {
            elements[i] = Math.abs(elements[i]);
        }
    }
    
    const chart_data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Next Year'],
        datasets: [
            {
                label: 'Sales',
                borderColor: '#588DA3',
                data: elements,
            },
        ]
    };
      
    return (
    <>
        <div className="row">
          <div className="col-md-2"/> 
          <div className="col-md-8 smallBox">
            <Line data={chart_data} />
          </div>
          <div className="col-md-2"/>
        </div>
    </>
    );
};

export default SalesGraph;
