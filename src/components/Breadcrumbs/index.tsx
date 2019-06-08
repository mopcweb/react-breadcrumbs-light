/* ################################################################### */
/*
/*  Breadcrumbs component
/*
/* ################################################################### */

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

/* ------------------------------------------------------------------- */
/*                               Config
/* ------------------------------------------------------------------- */

// =====> Styles
import './index.sass';

// =====> Services
import getBreadcrumbs from '../../services/BreadcrumbsService';

/* ------------------------------------------------------------------- */
/*                               Types
/* ------------------------------------------------------------------- */

import {
  IReactBreadcrumb, ReactBreadcrumbsProps
} from '../../interfaces/breadcrumbs';

/* ------------------------------------------------------------------- */
/*                             Component
/* ------------------------------------------------------------------- */

const Crumbs: React.FC<ReactBreadcrumbsProps & RouteComponentProps> = ({
   location, routes, separator, icons, customClasses, notFoundTitle,
   notFoundIcon
}) => {
  // Get all breadcrumbs
  const crumbs =
    getBreadcrumbs(routes, location.pathname, notFoundTitle, notFoundIcon);

  // Enable icons
  const iconsEnabled = icons
    ? icons
    : icons === false
      ? icons
      : true;

  /* ------------------------------------------------------------------- */
  /*                          Custom classes
  /* ------------------------------------------------------------------- */

  // Vars for custom classes
  let rootClass: any;
  let listClass: any;
  let linkClass: any;
  let currentLinkClass: any;
  let iconClass: any;
  let titleClass: any;
  let separatorClass: any;

  // Specify if provided
  if (customClasses && customClasses.root)
    rootClass = customClasses.root;
  if (customClasses && customClasses.list)
    listClass = customClasses.list;
  if (customClasses && customClasses.link)
    linkClass = customClasses.link;
  if (customClasses && customClasses.currentLink)
    currentLinkClass = customClasses.currentLink;
  if (customClasses && customClasses.icon)
    iconClass = customClasses.icon;
  if (customClasses && customClasses.title)
    titleClass = customClasses.title;
  if (customClasses && customClasses.separator)
    separatorClass = customClasses.separator;

  /* ------------------------------------------------------------------- */
  /*                          Link for prev routes
  /* ------------------------------------------------------------------- */

  const link = (item: IReactBreadcrumb) => (
    <React.Fragment key={item.title ? item.title + item.link : item.link}>
      <li>
        <Link
          to={item.link}
          className={
            `ReactBreadcrumbsLight-Link ${linkClass ? ` ${linkClass}` : ''}`
          }>

          {iconsEnabled && item.icon &&
            <span className={
              `ReactBreadcrumbsLight-Icon ${iconClass ? ` ${iconClass}` : ''}`
            }>
              {item.icon}
            </span>}

          <span className={
            `ReactBreadcrumbsLight-Title ${titleClass ? ` ${titleClass}` : ''}`
          } style={{ WebkitBoxOrient: 'vertical' }}>
            {item.title}
          </span>
        </Link>
      </li>

      <li className={
        `ReactBreadcrumbsLight-Separator ${separatorClass ? ` ${separatorClass}` : ''}`
      }>
        {separator ? separator : '/'}
      </li>
    </React.Fragment>
  );

  /* ------------------------------------------------------------------- */
  /*                         Link for current route
  /* ------------------------------------------------------------------- */

  const currentLink = (item: IReactBreadcrumb) => (
    <li
      key={item.title ? item.title + item.link : item.link}
      className={
        `ReactBreadcrumbsLight-Link ReactBreadcrumbsLight-Link_current \
        ${linkClass ? ` ${linkClass}` : ''}\
        ${currentLinkClass ? ` ${currentLinkClass}` : ''}`
      }>

      {iconsEnabled && item.icon &&
        <span className={
          `ReactBreadcrumbsLight-Icon ${iconClass ? ` ${iconClass}` : ''}`
        }>
          {item.icon}
        </span>}

      <span className={
        `ReactBreadcrumbsLight-Title ${titleClass ? ` ${titleClass}` : ''}`
      } style={{ WebkitBoxOrient: 'vertical' }}>
        {item.title}
      </span>
    </li>
  );

  /* ------------------------------------------------------------------- */
  /*                             Render
  /* ------------------------------------------------------------------- */

  return (
    <nav aria-label='Breadcrumb'
      className={`ReactBreadcrumbsLight ${rootClass ? ` ${rootClass}` : ''}`}>
        <ul className={
          `ReactBreadcrumbsLight-List ${listClass ? ` ${listClass}` : ''}`
        }>
          {crumbs.map((item, i, arr) => i === arr.length - 1
            ? currentLink(item)
            : link(item))}
        </ul>
    </nav>
  );
};

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

// Apply withRouter HOC & Export
export default withRouter(Crumbs);
