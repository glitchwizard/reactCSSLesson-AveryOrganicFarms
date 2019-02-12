import React from 'react';
import * as data from './data/availableProduce';
import SeasonalOfferings from './SeasonalOfferings';


const fullPage = {
  height: '100vh',
  background: 'tan',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(4, 1fr)',
  border: '1px solid black'
};

function ProduceMonth() {
  return (
    <div style={fullPage}>

      {data.availableProduce.map((monthObject, index)  =>
        <SeasonalOfferings
        month = {monthObject.month}
        selection = {monthObject.selection}
        key = {index} />
      )}
    </div>
  );
}

export default ProduceMonth;
