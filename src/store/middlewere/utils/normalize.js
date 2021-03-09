export const normalizeUserInfo = (result) => {
  const {
    avatar_url,
    bio,
    created_at,
    email,
    followers,
    name,
    location,
  } = result;

  return {
    avatar: avatar_url,
    bio,
    joinDate: created_at,
    email,
    followers,
    name,
    location,
  };
};
export const normalizeUsersData = ({ avatar_url, login, url, html_url }) => {
  return {
    avatar: avatar_url,
    name: login,
    userApiUrl: url,
    repoUrl: html_url,
  };
};
