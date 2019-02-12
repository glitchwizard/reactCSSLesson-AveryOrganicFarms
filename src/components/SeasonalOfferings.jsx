import React from 'react';
import PropTypes from 'prop-types';

function SeasonalOfferings({month, selection}) {
  return (
    <div>
      <h3>{month}</h3>
      <ul>
        {selection.map((selectionItem, index) =>
          <li key={index}>{selectionItem} </li>
        )}
      </ul>
      <hr/>
    </div>
  );
}

SeasonalOfferings.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};


export default SeasonalOfferings;
