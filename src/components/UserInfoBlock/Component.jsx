// External imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import LinearProgress from "@material-ui/core/LinearProgress";

// Internal imports
import { closeInfoModalAction } from "../../store/actionCreators/infoModal";
import { getUserRepos } from "../../store/middlewere/user";
import UserInfoTextBlock from "./components/UserInfo.jsx";
import RepoListItem from "./components/RepoListItem.jsx";
import filterByName from "./utils/filterByName";
import styles from "./styles.module.scss";

const UserInfoBlock = () => {
  // Redux dispatch
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeInfoModalAction());
  // Redux selectors
  const { reposApiUrl } = useSelector((state) => state.user.userInfo.data);
  const isLoading = useSelector((state) => state.user.userInfo.loading);
  const repos = useSelector((state) => state.user.userRepos);
  // Internal state
  const [sortedRepos, setSortedRepos] = useState([]);

  useEffect(
    () => reposApiUrl && !isLoading && dispatch(getUserRepos(reposApiUrl)),
    [reposApiUrl, isLoading]
  );

  useEffect(() => repos.length && setSortedRepos(repos), [repos]);

  const handleSortRepos = (e) =>
    setSortedRepos(filterByName(e.target.value, repos, "repoName"));

  return (
    <div className={styles.userInfoWrapper}>
      <Paper classes={{ root: styles.paper }} elevation={3}>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <>
            <div className={styles.infoContent}>
              <IconButton className={styles.closeButton} onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <UserInfoTextBlock />
              <div className={styles.searchRepoInput}>
                <TextField
                  margin="dense"
                  label="Enter Repo Name"
                  onChange={handleSortRepos}
                />
              </div>
            </div>
            <div className={styles.reposContainer}>
              {repos.length ? (
                sortedRepos.map((elements, i) => (
                  <RepoListItem key={i.toString()} {...elements} />
                ))
              ) : (
                <LinearProgress />
              )}
            </div>
          </>
        )}
      </Paper>
    </div>
  );
};

export default UserInfoBlock;
