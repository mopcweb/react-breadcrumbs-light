/* ################################################################### */
/*
/*  Root file for services
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                             Import all
/* ------------------------------------------------------------------- */

import {
  formUrlEncoded, removeParams, isEmpty, getDaysInMonth,
  makeFirstLetterUp, findParam, findMin
} from './helpers';
import getBreadcrumbs from './BreadcrumbsService';

/* ------------------------------------------------------------------- */
/*                              Export
/* ------------------------------------------------------------------- */

export {
  getBreadcrumbs,
  formUrlEncoded,
  removeParams,
  isEmpty,
  getDaysInMonth,
  makeFirstLetterUp,
  findParam,
  findMin,
};
