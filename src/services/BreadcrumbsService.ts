/* ################################################################### */
/*
/*  Breadcrumbs service. Returns array with breadcrumbs
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

// =====> Interfaces
import { IReactBreadcrumb, IReactRoute } from '../interfaces/breadcrumbs';

// =====> Helpers
import {
  removeParams, makeFirstLetterUp, findParam, findMin
} from './helpers';

/* ------------------------------------------------------------------- */
/*                              Service
/* ------------------------------------------------------------------- */

const getBreadcrumbs = (
  routes: IReactRoute[], fullUrl: string, notFoundTitle?: string, notFoundIcon?: any
): IReactBreadcrumb[] => {
  // Var for array to return
  const breadcrumbs: IReactBreadcrumb[] = [];

  // Remove params
  const croppedUrl: string = removeParams(fullUrl);

  // Root route
  const root = findMin(routes);

  // Array of paths
  const paths: string[] = routes[root.index].link[0] === '/'
    ? fullUrl === '/'
      ? [fullUrl]
      : croppedUrl.split('/')
    : croppedUrl.split('/');

  // Remove similar first routes
  if (paths[0] === paths[1])
    paths.splice(0, 1);

  // Var for changing link
  let link: string = '';

  // Var for prev route
  let prevRoute: IReactRoute | undefined;

  // Iterate over croppedUrl.slice('/') and create path for each link
  paths.forEach((item, i, arr) => {
    /** Update link.
    /*  First 2 conditions -> prevent duplicate '/'
    /*  Last condition -> define whether to use or no '/' for first route
    /*  depending on first
    */
    link =
      link[link.length - 1] === '/' ||
      item[0] === '/' ||
      (routes[root.index].link[0] !== '/' && i === 0)
        ? link + item
        : link + '/' + item;

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
/*                              Export
/* ------------------------------------------------------------------- */

export default getBreadcrumbs;
