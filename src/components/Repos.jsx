import axios from "axios";
import React, {useContext} from "react";
import {userContext} from "../context/userContext";

const Repos = ({repos}) => {
  const {loading} = useContext(userContext);
  console.log(repos);
  if (loading) {
    return;
  }
  return (
    <div className=" w-[100%] gap-5 p-3">
      {repos.map((item, index) => (
        <div key={index} className="flex gap-[30px] p-3 border">
          <div className="w-[100px]">
            <img src={item.owner.avatar_url} alt="avatar" />
          </div>
          <div className="flex flex-col gap-1">
            <span>Login: mojombo</span>
            <span>Name: {item.name}</span>
            <span>Site Admin: No</span>
            <span>Visibility: {item.visibility}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repos;
