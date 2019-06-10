/* ################################################################### */
/*
/*  Breadcrumbs component
/*
/* ################################################################### */

import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

/* ------------------------------------------------------------------- */
/*                               Config
/* ------------------------------------------------------------------- */

// =====> Styles
import './index.sass';

// =====> Interfaces
import {
  IReactBreadcrumb, ReactBreadcrumbsProps
} from '../../interfaces/breadcrumbs';

// =====> Services
import { getBreadcrumbs } from '../../services';

/* ------------------------------------------------------------------- */
/*                             Component
/* ------------------------------------------------------------------- */

const Crumbs: React.FC<ReactBreadcrumbsProps & RouteComponentProps> = ({
   location, routes, separator, icons, titles, customClasses, notFoundTitle,
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

  // Enable titles
  const titlesEnabled = titles
    ? titles
    : titles === false
      ? titles
      : true;

  /* ------------------------------------------------------------------- */
  /*                          Custom classes
  /* ------------------------------------------------------------------- */

  // Vars for custom classes
  let rootClass: any,
      listClass: any,
      linkClass: any,
      currentLinkClass: any,
      iconClass: any,
      titleClass: any,
      separatorClass: any;

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
    <Fragment key={item.title ? item.title + item.link : item.link}>
      <li>
        <Link
          to={item.link}
          className={`ReactBreadcrumbsLight-Link ${linkClass ? ` ${linkClass}` : ''}`}>

          {iconsEnabled && item.icon &&
            <span className={
              `ReactBreadcrumbsLight-Icon ${iconClass ? ` ${iconClass}` : ''}`
            }>
              {item.icon}
            </span>}

          {titlesEnabled && item.title &&
            <span className={
              `ReactBreadcrumbsLight-Title ${titleClass ? ` ${titleClass}` : ''}`
            } style={{ WebkitBoxOrient: 'vertical' }}>
              {item.title}
            </span>}
        </Link>
      </li>

      <li className={
        `ReactBreadcrumbsLight-Separator ${separatorClass ? ` ${separatorClass}` : ''}`
      }>
        {separator ? separator : '/'}
      </li>
    </Fragment>
  );

  /* ------------------------------------------------------------------- */
  /*                         Link for current route
  /* ------------------------------------------------------------------- */

  const currentLink = (item: IReactBreadcrumb) => (
    <li
      key={item.title ? item.title + item.link : item.link}
      className={
        `ReactBreadcrumbsLight-Link ReactBreadcrumbsLight-Link_current ${linkClass ? ` ${linkClass}` : ''}${currentLinkClass ? ` ${currentLinkClass}` : ''}`
      }>

      {iconsEnabled && item.icon &&
        <span className={
          `ReactBreadcrumbsLight-Icon ${iconClass ? ` ${iconClass}` : ''}`
        }>
          {item.icon}
        </span>}

      {titlesEnabled && item.title &&
        <span className={
          `ReactBreadcrumbsLight-Title ${titleClass ? ` ${titleClass}` : ''}`
        } style={{ WebkitBoxOrient: 'vertical' }}>
          {item.title}
        </span>}
    </li>
  );

  /* ------------------------------------------------------------------- */
  /*                             Render
  /* ------------------------------------------------------------------- */

  return (
    <nav aria-label="Breadcrumb"
      className={`ReactBreadcrumbsLight ${rootClass ? ` ${rootClass}` : ''}`}>
        <ul className={`ReactBreadcrumbsLight-List ${listClass ? ` ${listClass}` : ''}`}>
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
