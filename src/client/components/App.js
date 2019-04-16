import React from 'react';
import { Helmet } from 'react-helmet';

// import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

import Header from './shared/Header';
import Redirect from './shared/Redirect';
import { HomePage, AboutPage, NotFoundPage } from './pages';

const App = () => (
  <div>
    <Helmet>
      <title>My Title</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <Header />
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Redirect from="/new-about" to="/" />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;