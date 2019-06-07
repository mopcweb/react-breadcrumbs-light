/* ################################################################### */
/*
/*  Breadcrumbs styles
/*
/* ################################################################### */

import { Theme } from '@material-ui/core/styles';

/* ------------------------------------------------------------------- */
/*                              Styles
/* ------------------------------------------------------------------- */

export default (theme: Theme) => ({
  Breadcrumbs: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: theme.spacing(5),
    minHeight: theme.spacing(5),
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  Link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Link_current: {
    color: theme.palette.secondary.main
  },
  Icon: {
    marginRight: theme.spacing(0.5),
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
  },
  Title: {
    marginTop: '2px'
  }
});
