import React from 'react';
import PropTypes from 'prop-types';

function SeasonalOfferings({month, selection}) {
  const autoGrid = {
    overflow: 'auto',
    border: '5px white solid',
    borderRadius: '25px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  };
  const listDisplayGridItem = {
    border: '2px solid white',
    borderRadius: '20px',
    backgroundColor: '#2e282e',
    color: '#00b529',
    display: 'block',
    width: '99%',
    position:'sticky',
    left: '0',
    top: '0'
  };
  const itemList = {
    display: 'grid',
    gridTemplate: 'repeat(12, 20px) / repeat(3, 1fr)'
  };
  return (
    <div style={autoGrid}>
      <div style={listDisplayGridItem}>
        <h3 style={{textAlign: 'center'}}>{month}</h3>
      </div>
      <div style={itemList}>
        {selection.map((selectionItem, index) =>
          <p key={index}>- {selectionItem} </p>
        )}
      </div>
    </div>
  );
}

SeasonalOfferings.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};


export default SeasonalOfferings;
