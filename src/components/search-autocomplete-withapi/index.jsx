import { useEffect, useState } from "react";
import Suggestions from "./suggestion";
import classes from './index.module.css'

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleOnChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event){
    setShowDropdown(false)
    setSearchParam(event.target.innerText)
    setFilteredUsers([])
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setLoading(false);
        setUsers(data.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users,filteredUsers);

  return (
    <div className={classes["search-autocomplete-container"]}>
      <div className={classes.searchWrapper}>
        <h2>Search AutoComplete</h2>
        <div className={classes["search-box"]}>
          {loading ? (
            <div className={classes.loading}>Loading data please wait...</div>
          ) : (
            <input
              value={searchParam}
              name="search-users"
              placeholder="Search Users here..."
              type="text"
              onChange={handleOnChange}
            />
          )}

          {showDropdown && (
            <Suggestions handleClick={handleClick} data={filteredUsers} />
          )}
        </div>
      </div>
    </div>
  );
}
