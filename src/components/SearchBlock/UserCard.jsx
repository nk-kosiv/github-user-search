import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

import styles from "./styles.module.scss";

const UserCard = ({ src, name, handleOpenUserInfo, repoUrl }) => {
  return (
    <div
      onClick={handleOpenUserInfo}
      tabIndex="0"
      className={styles.cardContainer}
    >
      <div className={styles.avatarContainer}>
        <Avatar alt={name} src={src} />
        <Typography>User name: {name}</Typography>
      </div>
      <div className={styles.seeUserLink}>
        <Link color="primary" target="blank" href={repoUrl}>
          User page
        </Link>
      </div>
    </div>
  );
};

UserCard.propTypes = {};

export default UserCard;
