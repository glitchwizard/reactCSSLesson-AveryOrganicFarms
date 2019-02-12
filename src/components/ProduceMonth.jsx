import React from 'react';
import * as data from './data/availableProduce';
import SeasonalOfferings from './SeasonalOfferings';


const fullPage = {
  height: '100vh',
  background: 'tan',
  display: 'grid',
  gridColumnGap: '20px',
  gridRowGap: '20px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(3, calc(1/3vh - 20px)',
  border: '1px solid black',
  overflow: 'auto',
  border: '5px red dashed'
};

function ProduceMonth() {
  return (
    <div className='red-text' >
      <style jsx>{`
        @media (min-width: 1451px) {
          .red-text {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 1fr);
            color: blue;
          }
        }

        @media (max-width: 1450px) {
          .red-text {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
            color: blue;
          }
        }

        @media (max-width: 1150px) {
          .red-text {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(6, 1fr);
            color: blue;
          }
        }

        @media (max-width: 600px) {
          .red-text {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(12, 1fr);
            color: red;
          }
        }

      `}
      </style>
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
