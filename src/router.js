import * as views from "./Views/index";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={views.Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
