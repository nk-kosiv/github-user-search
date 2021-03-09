// External imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

// Intrrnal imports
import { getUser, getUserInfo } from "../../store/middlewere/user";
import { openInfoModalAction } from "../../store/actionCreators/infoModal";
import UserCard from "./UserCard.jsx";
import styles from "./styles.module.scss";

const SearchBlock = () => {
  const [inputName, setInputName] = useState("");

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const handleGetUser = (e) => {
    setInputName(e.target.value);
    dispatch(getUser(e.target.value));
  };
  const handleOpenUserInfo = (url) => {
    getUserInfo(url);
    dispatch(openInfoModalAction());
  };
  return (
    <div className={styles.searchWrapper}>
      <Paper elevation={3} className={styles.paper}>
        <div className={styles.searchHeader}>
          <Typography color="primary" variant="h4" component="h2">
            GitHub Search
          </Typography>
          <TextField
            margin="dense"
            label="GitHub User Name"
            onChange={handleGetUser}
          />
        </div>

        <Divider />
        <div className={styles.cardsWrapper}>
          {inputName ? (
            userData.map(({ avatar, name, userApiUrl }) => (
              <UserCard
                key={name}
                src={avatar}
                name={name}
                handleOpenUserInfo={() => handleOpenUserInfo(userApiUrl)}
              />
            ))
          ) : (
            <p className={styles.noResultsText}>No results</p>
          )}
        </div>
      </Paper>
    </div>
  );
};

SearchBlock.propTypes = {};

export default SearchBlock;
