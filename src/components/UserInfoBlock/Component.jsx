// External imports
import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

// Internal imports
import { closeInfoModalAction } from "../../store/actionCreators/infoModal";
import styles from "./styles.module.scss";

const UserInfoBlock = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.infoModal);
  const handleClose = () => dispatch(closeInfoModalAction());
  return (
    <>
      {isOpen ? (
        <div className={styles.userInfoWrapper}>
          <Paper classes={{ root: styles.paper }} elevation={3}>
            <button onClick={handleClose}>close</button>
          </Paper>
        </div>
      ) : null}
    </>
  );
};

UserInfoBlock.propTypes = {};

export default UserInfoBlock;
