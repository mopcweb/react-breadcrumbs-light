/* ################################################################### */
/*
/*  Dashboard component
/*
/* ################################################################### */

import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Breadcrumbs } from 'react-breadcrumbs-light'

/* ------------------------------------------------------------------- */
/*                             Components
/* ------------------------------------------------------------------- */

import Header from './Header';
import Nav from './Nav';

/* ------------------------------------------------------------------- */
/*                             Containers
/* ------------------------------------------------------------------- */

import {
  Home, NotFound, Settings, Clients, Client, Calendar, Month, Day
} from '../';

/* ------------------------------------------------------------------- */
/*                              Material
/* ------------------------------------------------------------------- */

import { withStyles } from '@material-ui/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

/* ------------------------------------------------------------------- */
/*                               Config
/* ------------------------------------------------------------------- */

// =====> Routes
import { dashboard, home, clients, calendar, settings } from '../../utils/routes';

import { routes } from '../../utils/routes';

// =====> Styles
import styles from './styles';

// =====> Type
type Props = {
  classes: { [x: string]: string };
};

/* ------------------------------------------------------------------- */
/*                              Component
/* ------------------------------------------------------------------- */

const Dashboard: React.FC<Props> = ({ classes }) => {
  // State
  const [nav, setNav] = useState(false);

  // Handle open/close nav
  const toggleNav = () => setNav(!nav);

  // Render
  return (
    <div className={classes.Dashboard}>
      <Header toggleNav={toggleNav} />
      <Breadcrumbs routes={routes} separator={<NavigateNextIcon />} notFoundIcon={<NotListedLocationIcon />} />
      <Nav state={nav} toggle={toggleNav} />

      <div className={classes.Wrapper}>
        <Switch>
          <Redirect exact from={dashboard} to={home} />
          <Route exact path={home} component={Home} />
          <Route exact path={clients} component={Clients} />
          <Route exact path={`${clients}/settings`} component={Settings} />
          <Route exact path={`${clients}/:id`} component={Client} />
          <Route exact path={calendar} component={Calendar} />
          <Route exact path={`${calendar}/:month`} component={Month} />
          <Route exact path={`${calendar}/:month/:day`} component={Day} />
          <Route exact path={settings} component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  )
};

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

export default withStyles(styles)(Dashboard);
