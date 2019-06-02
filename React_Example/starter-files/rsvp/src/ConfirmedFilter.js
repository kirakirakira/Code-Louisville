import React from 'react';

const ConfirmedFilter = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={props.toggleFilter}
        checked={props.isFiltered}
      /> Hide those who haven't responded
    </label>
  )
}

export default ConfirmedFilter;
