import React from "react";
import { Switch, Route } from "react-router-dom";
import Bank from "./BankDetails";
import IFSC from "./Ifscode";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={IFSC} />
      <Route exact path="/bankDetails/:id" component={Bank} />
    </Switch>
  </main>
);

export default Main;