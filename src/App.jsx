import React, {useEffect, useState} from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import Repos from "./components/Repos";
import axios from "axios";
import {userContext} from "./context/userContext";
const App = () => {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const reposFetch = async () => {
    if (!user.repos_url) {
      return;
    }
    const {data} = await axios.get(user.repos_url);
    setRepos(data);
  };

  useEffect(() => {
    reposFetch();
  }, [user]);
  return (
    <userContext.Provider value={{user, setUser, loading, setLoading}}>
      <div className="flex justify-center flex-col items-center mt-10 m-auto max-w-[900px] gap-1">
        <Heading />
        <Search />
        {user.length !== 0 && <UserCard user={user} />}
        {repos.length !== 0 || loading ? (
          <h1 className="text-3xl">Repository</h1>
        ) : (
          ""
        )}
        {repos.length !== 0 && <Repos repos={repos} />}
      </div>
    </userContext.Provider>
  );
};

export default App;
