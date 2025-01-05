import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hr.css";

const Hr = () => {
  return (
    <div>
      <button>CAREER</button>
      <main>
        <h1>HUMAN RESOURCES</h1>
        <h3>TO JOIN OUR HUMAN RESOURCES TEAM</h3>
        <h4 className="reach">REACH US THROUGH</h4>
        <h4>
          <span className="glyphicon glyphicon-envelope"></span> hr@engineersWorld.com
        </h4>
      </main>
    </div>
  );
};

export default Hr;
