import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile() {
  const [user, setUser] = useState({});
  const [input, setInput] = useState("");
  const [name, setName] = useState("Amanzm");
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name) {
      setLoading(true);
      fetch(`https://api.github.com/users/${name}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("User Not Found");
          }
          return res.json();
        })
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [name]);

  const handleClick = () => {
    setError(null);
    setName(input);
    setInput("");
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container  my-3 py-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              value={input}
              type="text"
              className="form-control"
              placeholder="GitHub username"
              aria-label="GitHub username"
              aria-describedby="button-addon2"
              onChange={handleOnChange}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              onClick={handleClick}
            >
              Search
            </button>
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
              Error: {error}
            </div>
          )}
          {user && !loading && !error && (
            <div className="card carda mt-4">
              <img
                src={user.avatar_url}
                className="card-img-top"
                alt={`${user.login} avatar`}
                style={{
                  border: "2px solid #9900FF",
                  height: "300px",
                  objectFit: "contain",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center display-6">
                  {user.login}
                </h5>

                <p className="card-text text-center">
                  {user.bio ? user.bio : "No bio available"}
                </p>
                <p className="card-text lead text-center">
                  Public Repos : {user.public_repos}
                </p>
                <div className="d-grid gap-2">
                  <a
                    className="btn btn-outline-primary"
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Profile
                  </a>
                </div>
                <p className="card-text text-center mt-3">
                  {user.name ? user.name : null}{" "}
                  {user.location ? ` from ${user.location}` : null}
                </p>
                <p className="card-text text-center">
                  User Joined on: {user.created_at}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
