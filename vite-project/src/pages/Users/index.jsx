import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useState } from "react";
import LisItem from "./ListItem";

//npm i axios --fetch yapmak için
function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {loading && <div>Loading...</div>}

      <div className="user-list">
        {users.map((user) => (
          <LisItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
