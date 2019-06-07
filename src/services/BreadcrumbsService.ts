/* ################################################################### */
/*
/*  Breadcrumbs service. Returns array with breadcrumbs
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                             Interfaces
/* ------------------------------------------------------------------- */

import { IReactBreadcrumb, IReactRoute } from '../interfaces/breadcrumbs';

/* ------------------------------------------------------------------- */
/*                              Service
/* ------------------------------------------------------------------- */

const getBreadcrumbs = (
  routes: IReactRoute[], fullUrl: string, notFoundTitle?: string, notFoundIcon?: string
): IReactBreadcrumb[] => {
  // Var for array to return
  const breadcrumbs: IReactBreadcrumb[] = [];

  // Remove first '/' from url & remove params
  let croppedUrl: string = removeParams(fullUrl.replace(/^\//, ''));

  // Array of paths
  const paths: string[] = croppedUrl.split('/');

  // Var for changing link
  let link: string = '';

  // Var for prev route
  let prevRoute: IReactRoute;

  // Iterate over croppedUrl.slice('/') and create path for each link
  paths.forEach((item, i, arr) => {
    // Define wheter the route is dynamic
    let dynamic = false;

    // Var for custom icon
    let customIcon: string = '';

    // Update link
    link = link + '/' + item;

    // Get title & icon for route
    let route: IReactRoute | undefined = routes.find(item => item.link === link);

    // If there is route found -> save it as prev route
    if (route) prevRoute = route;

    // If no route found -> try to find in its children by link or dynamic param
    if (!route && prevRoute && prevRoute.children) {
      route =
        prevRoute.children.find(item => item.link === link) ||
        prevRoute.children.find(item => !!item.param);

      // If foun children route and there is a param -> upate vars
      if (route && route.param && route.link === prevRoute.link + route.param) {
        // Update dynamic vars
        dynamic = true;
        customIcon = route.icon;

        // Reset route & prevRoute
        route = (prevRoute as any) = undefined;
      };
    };

    // Again: If there is route found -> save it as prev route
    if (route) prevRoute = route

    // Unit to push into breadcrumbs array
    const unit = {
      link,
      title: decodeURIComponent(
        route && route.title
          ? route.title
          : dynamic
            ? item
            : notFoundTitle
              ? notFoundTitle
              : 'Page Not Found'
      ),
      icon: route
        ? route.icon
        : customIcon
          ? customIcon
          : notFoundIcon
            ? notFoundIcon
            : 'NotListedLocation'
    };

    // If unit.title is not found -> skip if not last and push if last
    if (unit.title === notFoundTitle)
      return i !== arr.length - 1 ? false : breadcrumbs.push(unit);

    // Push into array
    breadcrumbs.push(unit);
  });

  // Return
  return breadcrumbs;
};

/* ------------------------------------------------------------------- */
/*                              Helper
/* ------------------------------------------------------------------- */

const removeParams = (url: string): string => url.replace(/\?.*/gi, '');

/* ------------------------------------------------------------------- */
/*                              Export
/* ------------------------------------------------------------------- */

export default getBreadcrumbs;
