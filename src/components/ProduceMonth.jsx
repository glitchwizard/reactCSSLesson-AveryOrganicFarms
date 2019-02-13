import React from 'react';
import * as data from './data/availableProduce';
import SeasonalOfferings from './SeasonalOfferings';


function ProduceMonth() {
  return (
    <div className='responsive-wrapper' >
      <style jsx>{`
        .responsive-wrapper {
          grid-column-gap: 25px;
          grid-row-gap: 10px;
          background-image: url("https://i.imgur.com/Ggov59a.jpg");
          background-size: cover;
          padding: 10px;
        }


        @media (min-width: 1451px) {
          .responsive-wrapper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 1fr);
          }
        }

        @media (max-width: 1450px) {
          .responsive-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
          }
        }

        @media (max-width: 1150px) {
          .responsive-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(6, 1fr);
          }
        }

        @media (max-width: 600px) {
          .responsive-wrapper {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(12, 1fr);
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
