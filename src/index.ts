/* ################################################################### */
/*
/*  Root file
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                              Import
/* ------------------------------------------------------------------- */

import Breadcrumbs from './components/Breadcrumbs';
import getBreadcrumbs from './services/BreadcrumbsService';
import {
  IReactBreadcrumb, IReactRoute, ReactBreadcrumbsProps
} from './interfaces/breadcrumbs';

/* ------------------------------------------------------------------- */
/*                              Export
/* ------------------------------------------------------------------- */

export {
  Breadcrumbs,
  getBreadcrumbs,
  IReactBreadcrumb,
  IReactRoute,
  ReactBreadcrumbsProps
};
