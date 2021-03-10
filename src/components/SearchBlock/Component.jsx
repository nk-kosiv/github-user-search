// External imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

// Intrrnal imports
import { getUsers, getUserInfo } from "../../store/middlewere/user";
import { openInfoModalAction } from "../../store/actionCreators/infoModal";
import UserCard from "./UserCard.jsx";
import styles from "./styles.module.scss";

const SearchBlock = () => {
  const dispatch = useDispatch();
  const { usersData } = useSelector((state) => state.user);

  const handleGetUser = (e) => {
    dispatch(getUsers(e.target.value));
  };

  const handleOpenUserInfo = (url) => {
    dispatch(getUserInfo(url));
    dispatch(openInfoModalAction());
  };

  return (
    <div className={styles.searchWrapper}>
      <Paper elevation={3} className={styles.paper}>
        <div className={styles.searchHeader}>
          <Typography color="primary" variant="h4" component="h2">
            Search User
          </Typography>
          <TextField
            margin="dense"
            label="Enter User Name"
            onChange={handleGetUser}
          />
        </div>
        <Divider />
        <div className={styles.cardsWrapper}>
          {usersData.length ? (
            usersData.map(({ avatar, name, userApiUrl, repoUrl }) => (
              <UserCard
                key={name}
                src={avatar}
                name={name}
                repoUrl={repoUrl}
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

export default SearchBlock;
