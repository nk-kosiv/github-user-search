// External imports
import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

// Intrrnal imports
import { getUser } from "../../store/middlewere/user";

const SearchBlock = (props) => {
  const dispatch = useDispatch();
  const handleGetUser = (e) => {
    dispatch(getUser(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={handleGetUser} />
    </div>
  );
};

SearchBlock.propTypes = {};

export default SearchBlock;
