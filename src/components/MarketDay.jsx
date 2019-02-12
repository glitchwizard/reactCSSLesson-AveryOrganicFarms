import React from 'react';
import PropTypes from 'prop-types';

function MarketDay({day, location, hours, booth}){
  return (
    <div>
      <h3>{day} - {location}</h3>
      <p><em>{hours}</em></p>
      <p>{booth}</p>
      <hr/>
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
