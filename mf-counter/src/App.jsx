import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Counter from "./components/Counter";

const App = () => (
  <div className="text-center mt-10">
    <Counter initialCounter={5} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
