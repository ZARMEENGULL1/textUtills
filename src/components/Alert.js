import React from "react";

function Alert(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {props.alert}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">x</span>
      </button>
    </div>
  );
}

export default Alert;

