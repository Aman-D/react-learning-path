import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">About Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocktaiel" />
      <Pet name="Donik" animal="Cat" breed="Mixed" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
