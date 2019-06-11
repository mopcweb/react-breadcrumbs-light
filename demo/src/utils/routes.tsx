/* ################################################################### */
/*
/*  App routes
/*
/* ################################################################### */

import React from 'react';
import { IReactRoute } from 'react-breadcrumbs-light';

/* ------------------------------------------------------------------- */
/*                             Material
/* ------------------------------------------------------------------- */

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TodayIcon from '@material-ui/icons/Today';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import SettingsIcon from '@material-ui/icons/Settings';

/* ------------------------------------------------------------------- */
/*                               Routes
/* ------------------------------------------------------------------- */

// =====> Service routes
export const login: string = '/login';
export const logout: string = '/logout';

// =====> Dashboard
export const dashboard: string = '/react-breadcrumbs-light';
export const home: string = dashboard + '/home';
export const clients: string = home + '/clients';
export const calendar: string = home + '/calendar';
export const settings: string = home + '/settings';

/* ------------------------------------------------------------------- */
/*                Routes array for nav & breadcrumbs
/* ------------------------------------------------------------------- */

export const routes: IReactRoute[] = [
  { title: 'Home', link: home, icon: <HomeIcon /> },
  { title: 'Clients', link: clients, icon: <ListIcon />, children: [
    { title: 'Settings', link: clients + '/settings', icon: <SettingsIcon /> },
    { title: 'Client № - ', suffix: ', welcome!', link: clients + '/:id', icon: <PersonIcon /> }
  ] },
  { title: 'Calendar', link: calendar, icon: <CalendarTodayIcon />, children: [
    { title: 'Month: ', link: calendar + '/:month', icon: <TodayIcon />, children: [
      { title: 'Day: ', link: calendar + '/:month/:day', icon: <ViewDayIcon /> }
    ] }
  ] },
  { title: 'Settings', link: settings, icon: <SettingsIcon /> }
];
