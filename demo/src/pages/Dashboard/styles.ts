/* ################################################################### */
/*
/*  Dashboard styles
/*
/* ################################################################### */

import { Theme } from '@material-ui/core/styles';

/* ------------------------------------------------------------------- */
/*                              Styles
/* ------------------------------------------------------------------- */

export default (theme: Theme): any => ({
  Dashboard: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',

    '@media screen and (max-width: 599px)': {
      paddingTop: theme.spacing(7),
    }
  },
  Wrapper: {
    padding: theme.spacing(3),
    width: '100%',
    height: `calc(100% - ${theme.spacing(5)}px)`,
  }
});
