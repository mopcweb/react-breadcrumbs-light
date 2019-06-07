/* ################################################################### */
/*
/*  Interfaces
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                            Breadcrumb
/* ------------------------------------------------------------------- */

export interface IReactBreadcrumb {
  link: string;
  title: string;
  icon: string;
}

/* ------------------------------------------------------------------- */
/*                              Route
/* ------------------------------------------------------------------- */

export interface IReactRoute {
  title: string;
  link: string;
  icon: string;
  children?: IReactRoute[];
  param?: string;
}

/* ------------------------------------------------------------------- */
/*                    Breadcrumbs component Props
/* ------------------------------------------------------------------- */

export type ReactBreadcrumbsProps = {
  classes: { [x: string]: string };
  routes: IReactRoute[];
  separator?: any;
  icons?: boolean;
  notFoundTitle?: string;
  notFoundIcon?: string;
  customClasses?: {
    root?: string;
    icon?: string;
    title?: string;
    link?: string;
    currentLink?: string;
  };
}
