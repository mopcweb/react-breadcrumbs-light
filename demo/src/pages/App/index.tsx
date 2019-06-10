/* ################################################################### */
/*
/*  App core
/*
/* ################################################################### */

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/* ------------------------------------------------------------------- */
/*                               Config
/* ------------------------------------------------------------------- */

// =====> Routes
import { dashboard } from '../../utils/routes';

/* ------------------------------------------------------------------- */
/*                             Containers
/* ------------------------------------------------------------------- */

import { Dashboard, NotFound } from '../';

/* ------------------------------------------------------------------- */
/*                              Component
/* ------------------------------------------------------------------- */

const App: React.FC = () => (
  <Fragment>
    <Router>
      <Switch>
        <Redirect exact from='/' to={dashboard} />
        <Route path={dashboard} component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
);

/* ------------------------------------------------------------------- */
/*                            Redux / export
/* ------------------------------------------------------------------- */

export default App
