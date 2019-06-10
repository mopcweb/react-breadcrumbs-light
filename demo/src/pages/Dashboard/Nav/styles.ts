/* ################################################################### */
/*
/*  Nav styles
/*
/* ################################################################### */

import { Theme } from '@material-ui/core/styles';

/* ------------------------------------------------------------------- */
/*                              Styles
/* ------------------------------------------------------------------- */

export default (theme: Theme) => ({
  Nav: {
    top: theme.spacing(8),

    '@media screen and (max-width: 599px)': {
      top: theme.spacing(7),
    }
  },
  List: { width: '250px' },
  Item: {},
  Item_active: {
    display: 'block',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,

    '& svg': {
      color: theme.palette.common.white
    }
  }
});
