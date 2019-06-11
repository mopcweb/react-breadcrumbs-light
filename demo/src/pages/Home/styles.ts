/* ################################################################### */
/*
/*  Home styles
/*
/* ################################################################### */

import { Theme } from '@material-ui/core/styles';

/* ------------------------------------------------------------------- */
/*                              Styles
/* ------------------------------------------------------------------- */

export default (theme: Theme): any => ({
  Home: {
    width: '100%',
    height: '100%',
  },
  Code: {
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(1),
    width: 'fit-content',
    overflowX: 'scroll !important',
    maxWidth: '100%',
    // background: theme.palette.common.black,
    background: theme.palette.primary.dark,
    color: theme.palette.common.white
  }
});
