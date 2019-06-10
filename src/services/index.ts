/* ################################################################### */
/*
/*  Root file for services
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                             Import all
/* ------------------------------------------------------------------- */

import getBreadcrumbs from './BreadcrumbsService';
import {
  removeParams, makeFirstLetterUp, findParam, findMin
} from './helpers';

/* ------------------------------------------------------------------- */
/*                              Export
/* ------------------------------------------------------------------- */

export {
  getBreadcrumbs,
  removeParams,
  makeFirstLetterUp,
  findParam,
  findMin
};
