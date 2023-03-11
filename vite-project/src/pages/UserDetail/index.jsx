import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, redirect, useNavigate } from "react-router-dom";

function UserDetail() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }

    axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (e.response.status === 404) {
          return navigate("/users/1");
        }
      });
  }, [user_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const nextUserId = Number(user_id) + 1;
  // const nextUserId = _id > 10 ? 1 : _id;

  const { id, name } = user;

  return (
    <div>
      <h2>User Detail</h2>
      <Link to={`/users/${nextUserId}`}>
        <button>Next ({nextUserId})</button>
      </Link>

      <pre style={{ fontSize: 14 }}>
        {JSON.stringify({ id, name }, null, 2)}
      </pre>
    </div>
  );
}

export default UserDetail;
