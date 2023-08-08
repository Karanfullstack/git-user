import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {userContext} from "../context/userContext";

const Search = () => {
  const [input, setInput] = useState(String);
  const {user, setUser, setLoading} = useContext(userContext);

  const fetchUser = async () => {
    if (input.trim() == "") {
      return;
    }
    try {
      setLoading(true)
      const {data} = await axios.get(`https://api.github.com/users/${input}`);
      setUser(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      fetchUser();
    }
  };
  const getInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="w-[450px] border flex  bg-blue-50 mb-[30px]">
      <input
        onKeyDown={onEnter}
        onChange={getInput}
        type="text"
        placeholder="Search..."
        className=" flex-grow py-3 pl-3 bg-blue-50 text-lg outline-none"
      />
      <button
        onClick={fetchUser}
        className=" bg-blue-300 py-2 px-3 font-semibold"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
