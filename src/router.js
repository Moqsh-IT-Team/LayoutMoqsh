import * as views from "./Views/index";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={views.Home} />
        <Route exact path="/team" component={views.TeamsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
