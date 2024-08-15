"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutComp = ({ users }: { users: any }) => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    setUsersData(users);
  }, []);

  return (
    <div>
      <ul>
        {usersData.length === 0 ? (
          <li>Data tidak ditemukan</li>
        ) : (
          usersData.map((user: any) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Website: {user.website}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AboutComp;
