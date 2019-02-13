import React from 'react';
import PropTypes from 'prop-types';

function MarketDay({day, location, hours, booth}){
  return (
    <div>
      <style jsx>{`
        .dayOfWeekItem {
          background-color: rgba(255, 255, 255, 0.6);
          margin: 10px;
          padding: 5px 10px 5px 15px;
          border: 3px solid white;
          border-radius: 5px;
          outline: 2px solid white;
          outline-offset: -4px;
        }
        p, h3 {
          margin: 0;
          padding 0;
        }

    `}

      </style>
      <div className="dayOfWeekItem">
        <h3>{day} - {location}</h3>
        <p><strong>Hours: </strong><em>{hours}</em></p>
        <p><strong>Booth: </strong>{booth}</p>
      </div>
    </div>
  );
}

MarketDay.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default MarketDay;
