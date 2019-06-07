/* ################################################################### */
/*
/*  Breadcrumbs component
/*
/* ################################################################### */

import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

/* ------------------------------------------------------------------- */
/*                              Material
/* ------------------------------------------------------------------- */

import { withStyles } from '@material-ui/styles';

// =====> Components
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

/* ------------------------------------------------------------------- */
/*                               Config
/* ------------------------------------------------------------------- */

// =====> Styles
import styles from './styles';

// =====> Services
import getBreadcrumbs from '../../services/BreadcrumbsService';

/* ------------------------------------------------------------------- */
/*                               Types
/* ------------------------------------------------------------------- */

import {
  ReactBreadcrumbsProps, IReactBreadcrumb
} from '../../interfaces/breadcrumbs';

/* ------------------------------------------------------------------- */
/*                             Component
/* ------------------------------------------------------------------- */

const Crumbs: React.FC<ReactBreadcrumbsProps & RouteComponentProps> = ({
   location, classes, routes, separator, icons, customClasses, notFoundTitle,
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
      : true

  // Import MUI Icons if iconsEnabled
  const Icons = iconsEnabled ? require('@material-ui/icons') : undefined;

  // Vars for custom classes
  let rootClass: any,
      iconClass: any,
      titleClass: any,
      linkClass: any,
      currentLinkClass: any;

  // Specify if provided
  if (customClasses && customClasses.root)
    rootClass = customClasses.root;
  if (customClasses && customClasses.icon)
    iconClass = customClasses.icon;
  if (customClasses && customClasses.title)
    titleClass = customClasses.title;
  if (customClasses && customClasses.link)
    linkClass = customClasses.link;
  if (customClasses && customClasses.currentLink)
    currentLinkClass = customClasses.currentLink;

  // Create appropriate Icon
  const Icon = (item: IReactBreadcrumb) => {
    // If icons not enabled -> stop
    if (!iconsEnabled)
      return;

    // Var for MUI Icon
    const Icon = (Icons as any)[item.icon];

    // Return Icon
    return <Icon className={`${classes.Icon}${iconClass ? ` ${iconClass}`: ''}`} />;
  };

  // Link for prev routes
  const link = (item: IReactBreadcrumb) => (
    <Link
      key={item.title}
      to={item.link}
      className={`${classes.Link}${linkClass ? ` ${linkClass}`: ''}`}>
      {iconsEnabled && Icon(item)}
      <span className={`${classes.Title}${titleClass ? ` ${titleClass}`: ''}`}>
        {item.title}
      </span>
    </Link>
  );

  // Link for current route
  const currentLink = (item: IReactBreadcrumb) => (
    <Typography
      key={item.title}
      className={
        `${classes.Link} ${classes.Link_current}${linkClass ? ` ${linkClass}`: ''}${currentLinkClass ? ` ${currentLinkClass}`: ''}`
      }>
      {iconsEnabled && Icon(item)}
      <span className={`${classes.Title}${titleClass ? ` ${titleClass}`: ''}`}>
        {item.title}
      </span>
    </Typography>
  );

  // Render
  return (
    <Breadcrumbs aria-label="Breadcrumb"
      separator={separator ? separator : '/'}
      className={
        `${classes.Breadcrumbs} MuiToolbar-gutters${rootClass ? ` ${rootClass}`: ''}`
      }>
        {crumbs.map((item, i, arr) => i === arr.length - 1
          ? currentLink(item)
          : link(item))}
    </Breadcrumbs>
  )
};

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

// Apply withRouter HOC
const Routed = withRouter(Crumbs);

// Export
export default withStyles(styles)(Routed);
