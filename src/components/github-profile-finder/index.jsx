import { useEffect, useState } from "react";
import User from "./user";
import classes from './index.module.css'


export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("kapil-singh-senwal");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);

    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      console.log(data);
      setUserName("");
    }
  }

  function handleSubmit() {
    if (userName.trim() !== "") {
      fetchGithubUserData();
    }
  }

  useEffect(() => {
    // Initial fetch
    const initialFetch = async () => {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/kapil-singh-senwal`);
      const data = await response.json();
      if (data) {
        setUserData(data);
        setLoading(false);
      }
    };
    
    initialFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1 className={classes.loading}>Loading data please wait... </h1>;
  }

  return (
    <div className={classes.githubProfieContainer}>
      <div className={classes.wrapper}>
        <div className={classes.inputWrapper}>
          <input
            name="search-by-username"
            type="text"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
}
