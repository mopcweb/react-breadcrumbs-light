/* ################################################################### */
/*
/*  Home component
/*
/* ################################################################### */

import React from 'react';

/* ------------------------------------------------------------------- */
/*                              Material
/* ------------------------------------------------------------------- */

import { withStyles } from '@material-ui/styles';

/* ------------------------------------------------------------------- */
/*                               Config
/* ------------------------------------------------------------------- */

// =====> Styles
import styles from './styles';

type Props = {
  classes: { [x: string]: string };
};

/* ------------------------------------------------------------------- */
/*                              Component
/* ------------------------------------------------------------------- */

const Home: React.FC<Props> = ({ classes }) => {
  // Example route config
  const config = `[
  { title: 'Home', link: home, icon: '<HomeIcon />' }, \n
  { title: 'Clients', link: clients, icon: '<ListIcon />', children: [ \n
    { title: 'Settings', link: clients + '/settings', icon: '<SettingsIcon />' }, \n
    { title: 'Client № - ', link: clients + '/:id', icon: '<PersonIcon />' } \n
  ] }, \n
  { title: 'Calendar', link: calendar, icon: <CalendarTodayIcon />, children: [ \n
    { title: 'Month: ', link: calendar + '/:month', icon: <TodayIcon />, children: [ \n
      { title: 'Day: ', link: calendar + '/:month/:day', icon: <ViewDayIcon /> } \n
    ] } \n
  ] }, \n
  { title: 'Settings', link: settings, icon: '<SettingsIcon />' } \n
]`

  // Render
  return (
    <div className={classes.Home}>
      <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
        Breadcrumbs routes config
      </div>
      <pre className={classes.Code}>
        {config}
      </pre>
    </div>
  )
};

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

export default withStyles(styles)(Home);
