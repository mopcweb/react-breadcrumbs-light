/* ################################################################### */
/*
/*  Client core
/*
/* ################################################################### */

import React from 'react';
import ReactDOM from 'react-dom';

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

// =====> Service worker
import * as serviceWorker from './utils/serviceWorker';

// =====> Variables & overrides
import { palette } from './utils/overrides';

// =====> Styles
import './index.sass';

/* ------------------------------------------------------------------- */
/*                                App
/* ------------------------------------------------------------------- */

import { App } from './pages';

/* ------------------------------------------------------------------- */
/*                             Material
/* ------------------------------------------------------------------- */

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/* ------------------------------------------------------------------- */
/*                              Theme
/* ------------------------------------------------------------------- */

// =====> Create theme & add custom variables into theme object
const theme = createMuiTheme({
  ...palette
});

// =====> Console log theme
// console.log('=====> theme', theme);

/* ------------------------------------------------------------------- */
/*                              Render
/* ------------------------------------------------------------------- */

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

/* ------------------------------------------------------------------- */
/*                           Service worker
/* ------------------------------------------------------------------- */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
