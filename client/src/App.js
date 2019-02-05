import React, { Component } from "react";
import SearchContainer from "./containers/SearchContainer"
import BookInfoContainer from './containers/BookInfoContainer';
import AuthorInfoContainer from './containers/AuthorInfoContainer';
import { Switch, Route, BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header clearfix mt-2 mb-2">
          <h3 className="text-muted">Goodreads Book Search</h3>
        </div>
        <div className="search-container">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={SearchContainer}></Route>
              <Route exact path='/book/:id' component={BookInfoContainer}></Route>
              <Route exact path='/author/:id' component={AuthorInfoContainer}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
