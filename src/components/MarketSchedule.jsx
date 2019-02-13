import React from 'react';
import * as data from './data/masterSchedule';
import MarketDay from './MarketDay';


const fullPage = {
  height: '100vh',
  minHeight: '1000px',
  backgroundImage: 'url("http://www.milamsmarkets.com/_images/content/produceBG.jpg")',
  backgroundSize: 'cover'
};

const twoColumns = {
  display: 'grid',
  gridTemplate: '1fr / 1fr 1fr'
};

function MarketSchedule() {
  return (
    <div style={fullPage}>
      <img src="https://i.imgur.com/UcFmlHN.png" style={{width: '80%', display: 'block', margin: 'auto'}}></img>
      <hr/>
      <div style={twoColumns}>
        <div>
          {data.masterSchedule.map((marketDay, index) =>
            <MarketDay day = {marketDay.day}
              location = {marketDay.location}
              hours = {marketDay.hours}
              booth = {marketDay.booth}
              key = {index}
            />
          )}
        </div>
        <div style={{alignSelf: 'center', placeSelf: 'center'}}>
          <img src='https://ccms.farmjournal.com/sites/default/files/2017-12/Farmland_Market_Stabilizes.jpg' style={{width: '100%', borderRadius: '10px', border: '5px solid white', marginRight: '10px'}}></img>
        </div>
      </div>
    </div>
  );
}



export default MarketSchedule;
