import React from "react";
import "../App.css";
import { Spinner } from "reactstrap";
export const Loading = () => {
  return (
    <div className="spinner">
      <div>
        <Spinner type="grow" color="primary" style={{ margin: "20px" }} />
        <Spinner type="grow" color="secondary" style={{ margin: "20px" }} />
        <Spinner type="grow" color="success" style={{ margin: "20px" }} />
        <Spinner type="grow" color="danger" style={{ margin: "20px" }} />
        <Spinner type="grow" color="warning" style={{ margin: "20px" }} />
        <Spinner type="grow" color="info" style={{ margin: "20px" }} />
        <Spinner type="grow" color="dark" style={{ margin: "20px" }} />
      </div>
    </div>
  );
};

export default Loading;
