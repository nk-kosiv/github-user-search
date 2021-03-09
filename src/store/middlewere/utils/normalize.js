export const normalizeUserInfo = (result) => {
  const {
    avatar_url,
    bio,
    created_at,
    email,
    followers,
    following,
    name,
    location,
    repos_url,
  } = result;

  return {
    avatar: avatar_url,
    bio,
    joinDate: created_at,
    email,
    followers,
    following,
    name,
    location,
    reposApiUrl: repos_url,
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

export const normalizeUserRepos = (result) => {
  const { stargazers_count, forks, name, html_url } = result;
  return {
    stars: stargazers_count,
    forks,
    repoName: name,
    linkToRepo: html_url,
  };
};
