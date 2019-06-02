import React from 'react';
import GuestInputForm from './GuestInputForm';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <GuestInputForm
        newGuestSubmitHandler={props.newGuestSubmitHandler}
        pendingGuest={props.pendingGuest}
        handleNameInput={props.handleNameInput}
      />
    </header>
  )
}

Header.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
}

export default Header;
