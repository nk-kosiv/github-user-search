// External imports
import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

// Internal imports
import styles from "../styles.module.scss";

const RepoListItem = (props) => {
  const { stars, forks, repoName, linkToRepo } = props;
  return (
    <Link
      className={styles.linkRepoBlock}
      key={repoName}
      target="blank"
      href={linkToRepo}
    >
      <Typography>
        <strong>Repo name: </strong> {repoName}
      </Typography>
      <Typography className={styles.repoStarsForks}>
        <span>Forks: {forks}</span>
        <span>Stars: {stars}</span>
      </Typography>
    </Link>
  );
};

RepoListItem.propTypes = {
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  repoName: PropTypes.string.isRequired,
  linkToRepo: PropTypes.string.isRequired,
};

export default RepoListItem;
