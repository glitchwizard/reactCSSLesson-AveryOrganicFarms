import React from 'react';
import * as data from './data/availableProduce';
import SeasonalOfferings from './SeasonalOfferings';


const fullPage = {
  height: '100vh',
  background: 'tan',
  overflow: 'auto',
  maxWidth: '300px'
};

function ProduceMonth() {
  return (
    <div style={fullPage}>
      <hr/>
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
