import React from 'react';
import PropTypes from 'prop-types';

function SeasonalOfferings({month, selection}) {
  const autoGrid = {
    overflow: 'auto',
    border: '1px black solid',
    // display: 'grid',
    // gridTemplateColumns: 'repeat(7, 10px)',
    // gridAutoRows: 'fit-content(1fr)'
  }
  const listDisplayGridItem = {
    border: '2px blue solid',
    backgroundColor: 'lightgreen',
    display: 'block',
    width: '99%',
    position:'sticky',
    left: '0',
    top: '0'
  }
  const itemList = {
    display: 'grid',
    gridTemplate: 'repeat(12, 20px) / repeat(3, 1fr)'
  }
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
