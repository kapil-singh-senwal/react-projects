import classes from './index.module.css'

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className={classes.user}>
      <div className={classes.avatarWrapper}>
        <img src={avatar_url} className={classes.avatar} alt="User" />
      </div>
      <div className={classes.infoWrapper}>
        <a className={classes.name} href={`https://github.com/${login}`}>{name || login}</a>
        <p className={classes.joinedDate}>
          User joined on{" "}
          <span>
            {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </span>
        </p>
      </div>
      <div className={classes.statsWrapper}>
        <div className={classes.statItem}>
          <p>Repos</p>
          <h3>{public_repos}</h3>
        </div>
        <div className={classes.statItem}>
          <p>Followers</p>
          <h3>{followers}</h3>
        </div>
        <div className={classes.statItem}>
          <p>Following</p>
          <h3>{following}</h3>
        </div>
      </div>
    </div>
  );
}
