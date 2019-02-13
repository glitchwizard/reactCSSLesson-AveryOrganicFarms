import React from 'react';
import MarketSchedule from './MarketSchedule';
import ProduceMonth from './ProduceMonth';

function App() {
  return (
    <div className="mainPage">
      <style jsx>{`
      .mainPage {
      font-family: Trebuchet MS;
      }
    `}
      </style>
      <MarketSchedule/>
      <ProduceMonth/>
    </div>
  );
}

export default App;
