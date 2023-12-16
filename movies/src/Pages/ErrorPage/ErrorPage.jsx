import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <div className="error">
        <div>404</div>
        <p className="notFound">Page Not Found</p>
        <p className="notExist">The page you're looking for doesn't exist</p>
        <Link to="/" className="Homelink">
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
