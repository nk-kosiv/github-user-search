// External imports
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

// Internal imports
import { closeInfoModalAction } from "../../store/actionCreators/infoModal";
import { getUserRepos } from "../../store/middlewere/user";
import styles from "./styles.module.scss";

const UserInfoBlock = () => {
  const dispatch = useDispatch();
  const {
    avatar,
    bio,
    joinDate,
    email,
    followers,
    following,
    name,
    location,
    reposApiUrl,
  } = useSelector((state) => state.user.userInfo.data);
  const isLoading = useSelector((state) => state.user.userInfo.loading);
  const { isOpen } = useSelector((state) => state.infoModal);
  const repos = useSelector((state) => state.user.userRepos);

  const handleClose = () => dispatch(closeInfoModalAction());

  useEffect(() => {
    if (reposApiUrl) {
      dispatch(getUserRepos(reposApiUrl));
    }
  }, [reposApiUrl]);
  const handleGetRepos = (e) => console.log(e.target.value);

  return (
    <>
      {isOpen ? (
        <div className={styles.userInfoWrapper}>
          <Paper classes={{ root: styles.paper }} elevation={3}>
            {isLoading ? (
              <LinearProgress />
            ) : (
              <>
                <div className={styles.infoContent}>
                  <IconButton
                    className={styles.closeButton}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography className={styles.userInfoHeader}>
                    User Info
                  </Typography>
                  <div className={styles.userBioInfo}>
                    <Avatar src={avatar} alt={name} />
                    <div>
                      <Typography>Name: {name || "No Name"}</Typography>
                      <Typography>Email: {email || "No Email"}</Typography>
                      <Typography>
                        Location: {location || "No Location"}
                      </Typography>
                      <Typography>
                        Join Date: {joinDate || "No Join Date"}
                      </Typography>
                      <Typography>
                        Followers: {followers || "No Followers"}
                      </Typography>
                      <Typography>
                        Following: {following || "No Followers"}
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <Typography>{bio || "No Bio provided"}</Typography>
                  </div>
                  <div>
                    <TextField
                      margin="dense"
                      label="Enter User Name"
                      onChange={handleGetRepos}
                    />
                  </div>
                </div>
                <div className={styles.reposContainer}>
                  {repos.length ? (
                    repos.map(({ stars, forks, repoName, linkToRepo }) => (
                      <Link
                        className={styles.linkRepoBlock}
                        key={repoName}
                        target="blank"
                        href={linkToRepo}
                      >
                        <Typography>Repo name: {repoName}</Typography>
                        <Typography className={styles.repoStarsForks}>
                          <span>Forks: {forks}</span>
                          <span>Stars: {stars}</span>
                        </Typography>
                      </Link>
                    ))
                  ) : (
                    <LinearProgress />
                  )}
                </div>
              </>
            )}
          </Paper>
        </div>
      ) : null}
    </>
  );
};

UserInfoBlock.propTypes = {};

export default UserInfoBlock;
