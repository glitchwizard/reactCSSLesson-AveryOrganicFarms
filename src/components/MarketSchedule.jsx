import React from 'react';
import * as data from './data/masterSchedule';
import MarketDay from './MarketDay';


const fullPage = {
  height: '100vh'
};

function MarketSchedule() {
  return (
    <div style={fullPage}>
      <hr/>
      {data.masterSchedule.map((marketDay, index) =>
        <MarketDay day = {marketDay.day}
          location = {marketDay.location}
          hours = {marketDay.hours}
          booth = {marketDay.booth}
          key = {index}
        />
      )}
    </div>
  );
}



export default MarketSchedule;
