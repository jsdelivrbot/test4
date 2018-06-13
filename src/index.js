import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import NodesIndex from "./components/nodes_index";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import NodesShow from "./components/nodes_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/nodes/new" component={CheckoutForm} />
          <Route exact path="/nodes/:nid" component={NodesShow} />
          <Route exact path="/" component={NodesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
