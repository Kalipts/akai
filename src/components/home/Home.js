import React from "react";
import AddResource from "../add/AddResource";
import ListResource from "../list/ListResource";

const Home = () => {
  return (
    <div className="row">
      <div>
        <AddResource />
        <ListResource />
      </div>
    </div>
  );
};

export default Home;
