// External imports
import React from "react";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

// Internal imports
import styles from "../styles.module.scss";

const UserInfo = () => {
  const {
    avatar,
    bio,
    joinDate,
    email,
    followers,
    following,
    name,
    location,
  } = useSelector((state) => state.user.userInfo.data);

  return (
    <div className={styles.userInfoTextContainer}>
      <Typography variant="h5" className={styles.userInfoHeader}>
        User Info
      </Typography>
      <div className={styles.userBioInfo}>
        <Avatar
          className={styles.avatar}
          variant="rounded"
          src={avatar}
          alt={name}
        />
        <div className={styles.infoItemParagraphs}>
          <Typography>
            <strong>Name: </strong>
            {name || "No Name"}
          </Typography>
          <Typography>
            <strong>Email:</strong> {email || "No Email"}
          </Typography>
          <Typography>
            <strong>Location:</strong> {location || "No Location"}
          </Typography>
          <Typography>
            <strong>Join:</strong> {joinDate || "No Join Date"}
          </Typography>
          <Typography>
            <strong>Followers:</strong> {followers || "No Followers"}
          </Typography>
          <Typography>
            <strong>Following:</strong> {following || "No Followers"}
          </Typography>
        </div>
      </div>

      <Typography className={styles.infoItemBio}>
        <strong>Bio:</strong> {bio || "No Bio provided"}
      </Typography>
    </div>
  );
};
export default UserInfo;
