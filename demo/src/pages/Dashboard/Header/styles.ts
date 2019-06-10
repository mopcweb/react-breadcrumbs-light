/* ################################################################### */
/*
/*  Header styles
/*
/* ################################################################### */

import { Theme } from '@material-ui/core/styles';

/* ------------------------------------------------------------------- */
/*                              Styles
/* ------------------------------------------------------------------- */

export default (theme: Theme) => ({
  Root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.black
  },
  Btn: {
    marginRight: theme.spacing(2),
  },
  Title: {
    flexGrow: 1,
  },
  MenuItem: {
    marginLeft: theme.spacing(2)
  }
});
