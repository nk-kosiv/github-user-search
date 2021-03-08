import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";

const UserCard = ({ src, name, repoNumber }) => {
  return (
    <>
      <Paper elevation={0}>
        <div>
          <Avatar alt={name} src={src} />
          <Typography>{name}</Typography>
        </div>
        <div>
          <Typography>Repo: {repoNumber}</Typography>
        </div>
      </Paper>
    </>
  );
};

UserCard.propTypes = {};

export default UserCard;
