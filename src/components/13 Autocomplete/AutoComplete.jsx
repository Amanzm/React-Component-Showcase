import React, { useEffect, useState } from "react";

function AutoComplete() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (input) {
      setLoading(true);
      fetch(
        `http://dummyjson.com/users/search?q=${input}&select=firstName,lastName`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("User Not Found");
          }
          return res.json();
        })
        .then((data) => {
          const filteredUsers = data.users.filter((user) =>
            user.firstName.toLowerCase().includes(input.toLowerCase())
          );
          setUsers(filteredUsers);

          setError(null);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    } else {
      setUsers([]);
    }
  }, [input]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container my-3 py-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              value={input}
              type="text"
              className="form-control"
              placeholder="Search User"
              onChange={handleOnChange}
            />
          </div>
          {loading && (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}
          {!loading && !error && users.length > 0 && (
            <ul className="list-group">
              <li className="list-group-item" aria-disabled="true">
                Suggested Users:
              </li>
              {users.map((user) => (
                <li key={user.id} className="list-group-item">
                  {user.firstName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default AutoComplete;
