import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
