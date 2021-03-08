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

const SearchBlock = (props) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const handleGetUser = (e) => dispatch(getUser(e.target.value));
  console.log(userData);

  return (
    <div className={styles.searchWrapper}>
      <Paper elevation={3} className={styles.paper}>
        <Typography color="primary" variant="h4" component="h2">
          GitHub Search
        </Typography>
        <TextField
          margin="dense"
          label="GitHub User Name"
          onChange={handleGetUser}
        />
        <Divider />
        <div>
          {!!userData.items &&
            userData.items.map(({ avatar_url, login }) => (
              <UserCard
                key={login}
                src={avatar_url}
                name={login}
                repoNumber={1}
              />
            ))}
        </div>
      </Paper>
    </div>
  );
};

SearchBlock.propTypes = {};

export default SearchBlock;
