import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const GuestInputForm = (props) => {
  return (
    <form onSubmit={props.newGuestSubmitHandler}>
        <input
          type="text"
          value={props.pendingGuest}
          placeholder="Invite Someone"
          onChange={props.handleNameInput}
        />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>
  )
}

GuestInputForm.propTypes = {
  // name: PropTypes.string.isRequired,
}

export default GuestInputForm;
