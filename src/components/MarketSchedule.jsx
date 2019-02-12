import React from 'react';
import * as data from './masterSchedule';
import MarketDay from './MarketDay';

function MarketSchedule() {
  return (
    <div>
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
