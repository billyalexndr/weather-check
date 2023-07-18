import React from "react";

const Alert = ({ foundCity, handleAlert }) => {
  return !foundCity ? (
    <div className="alert alert-info alert-dismissible fade show mt-3">
      <strong>The City Was Not Found</strong>
      <button type="button" className="close" onClick={() => handleAlert()}>
        <span aria-hidden="true">&times;</span>
      </button>     
    </div>
  ) : null;
};

export default Alert;
