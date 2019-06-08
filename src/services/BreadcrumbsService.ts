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
  routes: IReactRoute[], fullUrl: string, notFoundTitle?: string, notFoundIcon?: any
): IReactBreadcrumb[] => {
  // Var for array to return
  const breadcrumbs: IReactBreadcrumb[] = [];

  // Remove first '/' from url & remove params
  const croppedUrl: string = removeParams(fullUrl.replace(/^\//, ''));

  // Array of paths
  const paths: string[] = croppedUrl.split('/');

  // Var for changing link
  let link: string = '';

  // Var for prev route
  let prevRoute: IReactRoute | undefined;

  // Iterate over croppedUrl.slice('/') and create path for each link
  paths.forEach((item, i, arr) => {
    // Update link
    link = link + '/' + item;

    // Get title & icon for route
    let route: IReactRoute | undefined = routes.find(item => item.link === link);

    // If there is route found -> save it as prev route
    if (route) prevRoute = route;

    // If no route found -> try to find in its children by link or dynamic param
    if (!route && prevRoute && prevRoute.children)
      route =
        prevRoute.children.find(item => item.link === link) ||
        prevRoute.children.find(item => findParam(item.link));

    // Again: If there is route found -> save it as prev route
    if (route) prevRoute = route;

    // Define breadcrumbs unit title
    const title: string = route
      ? route.title
        ? findParam(route.link)
          ? decodeURIComponent(route.title + makeFirstLetterUp(item))
          : decodeURIComponent(route.title)
        : decodeURIComponent(makeFirstLetterUp(item))
      : notFoundTitle
        ? decodeURIComponent(notFoundTitle)
        : decodeURIComponent('Page Not Found');

    // Define breadcrumbs unit icon
    const icon: any = route
      ? route.icon
      : notFoundIcon;

    // Unit to push into breadcrumbs array
    const unit = { link, title, icon };

    // If unit.title is not found -> skip if not last and push if last
    if (unit.title === notFoundTitle || unit.title === 'Page Not Found')
      return i !== arr.length - 1 ? false : breadcrumbs.push(unit);

    // Push into array
    breadcrumbs.push(unit);
  });

  // Return
  return breadcrumbs;
};

/* ------------------------------------------------------------------- */
/*                              Helpers
/* ------------------------------------------------------------------- */

// =====> Remove params
const removeParams = (url: string): string => url.replace(/\?.*/gi, '');

// =====> Uppercase first letter
const makeFirstLetterUp = (item: string): string =>
  item.slice(0, 1).toUpperCase() + item.slice(1);

// =====> Find param
const findParam = (link: string): boolean =>
  link.indexOf('/:') !== -1;

/* ------------------------------------------------------------------- */
/*                              Export
/* ------------------------------------------------------------------- */

export default getBreadcrumbs;
