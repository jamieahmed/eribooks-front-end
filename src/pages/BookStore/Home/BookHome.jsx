import React from "react";
import { Link } from "react-router-dom";

const BookHome = () => {
  return (
    <div>
      <h1> Main Books Page</h1>
      <Link to="/book-details">
        <div>
          <h1> after we click each book this link take us to details page</h1>
        </div>
      </Link>
    </div>
  );
};

export default BookHome;
