// External imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

// Intrrnal imports
import { getUser } from "../../store/middlewere/user";
import UserCard from "./UserCard.jsx";
import styles from "./styles.module.scss";

const SearchBlock = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const handleGetUser = (e) => dispatch(getUser(e.target.value));

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
          {!!userData.length &&
            userData.map(({ avatar, name, userPage, userApiUrl }) => (
              <UserCard
                key={name}
                src={avatar}
                name={name}
                htmlUrl={userPage}
                userApiUrl={userApiUrl}
              />
            ))}
        </div>
      </Paper>
    </div>
  );
};

SearchBlock.propTypes = {};

export default SearchBlock;
