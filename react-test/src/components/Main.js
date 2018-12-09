import React from "react";
import { Switch, Route } from "react-router-dom";
import Bank from "./BankDetails";
import IFSC from "./Ifscode";
import History from "./History";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={IFSC} />
      <Route exact path="/bankDetails/:id" component={Bank} />
      <Route exact path="/history/" component={History} />
    </Switch>
  </main>
);

export default Main;