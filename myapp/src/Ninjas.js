import React from "react";
import "./Ninja.css";

const Ninjas = ({ ninjas, deleteNinja }) => {
  return (
    <div className="ninja-list">
      {ninjas.map(
        ninja =>
          ninja.age < 70 ? (
            <div className="ninja" key={ninja.id}>
              <div>Name: {ninja.name}</div>
              <div>Age: {ninja.age}</div>
              <div>Belt: {ninja.belt}</div>
              <button onClick={() => deleteNinja(ninja.id)}>Delete</button>
            </div>
          ) : null
      )}
    </div>
  );
};
export default Ninjas;
