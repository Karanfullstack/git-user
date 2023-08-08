import React, {useContext, useState} from "react";
import {userContext} from "../context/userContext";

const UserCard = ({user}) => {
  const {loading} = useContext(userContext);
    if(loading){
      return <h1>Loading...</h1>
    }
  return (
    <main className="flex justify-center gap-[80px] mb-[30px]  min-w-[100%] p-8">
      <div id="left" className="w-[200px] h-[200px]">
        <img src={user.avatar_url} alt="avatar" />
      </div>

      <div
        id="right"
        className=" flex flex-col items-start gap-5 text-[1.2em] tracking-[2px]"
      >
        <span>Login: {user.login}</span>
        <span>Name: {!user.name ? "Not Avilable" : user.name} </span>
        <span>Site Admin: {!user.site_admin ? "No Admin" : "Admin"}</span>
      </div>
    </main>
  );
};

export default UserCard;
