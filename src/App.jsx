import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/pages/Home";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
};

export default App;
