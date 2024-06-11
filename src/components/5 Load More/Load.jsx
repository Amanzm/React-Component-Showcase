import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Load() {
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [err, setErr] = useState("");
  const [disable, setDisable] = useState(false);

  // UseEffect hook for fetching products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${count * 10}`
        );
        const data = await res.json();
        setProd((prevData) => [...prevData, ...data.products]); // Append new products to the existing list
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        setErr("Failed to fetch products."); // Set a user-friendly error message
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchProducts();
  }, [count]); // Dependency array includes count

  useEffect(() => {
    const maxProducts = 30;
    if (prod.length >= maxProducts) {
      setDisable(true);
    }
  }, [prod]);

  // Function to load more products
  const loadMoreProducts = () => {
    setCount((prevCount) => prevCount + 1); // Increment the count to fetch the next set of products
  };

  return (
    <>
      <h1>Products</h1>
      <div className="container my-4 text-center">
        {loading && count === 0 ? (
          <div className="text-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : err ? (
          <p>Error: {err}</p>
        ) : (
          <div className="row">
            {prod.length > 0 &&
              prod.map((item) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={item.thumbnail}
                      className="card-img-top"
                      alt={item.title}
                      // style={{ height: "150px", objectFit: "cover" }} // Style adjustments for image
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.id}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        {loading && count > 0 && (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center my-3">
        <button
          disabled={loading || disable}
          className="btn btn-outline-primary"
          onClick={loadMoreProducts}
        >
          Load More Products
        </button>
      </div>
      {disable ? (
        <div className="text-center">You Have Reached Max Limit Already</div>
      ) : null}
    </>
  );
}

export default Load;
