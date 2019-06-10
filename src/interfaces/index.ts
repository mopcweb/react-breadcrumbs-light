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
  title?: string;
  icon?: any;
}

/* ------------------------------------------------------------------- */
/*                              Route
/* ------------------------------------------------------------------- */

export interface IReactRoute {
  link: string;
  title?: string;
  icon?: any;
  children?: IReactRoute[];
}

/* ------------------------------------------------------------------- */
/*                    Breadcrumbs component Props
/* ------------------------------------------------------------------- */

export type ReactBreadcrumbsProps = {
  routes: IReactRoute[];
  separator?: any;
  icons?: boolean;
  titles?: boolean;
  notFoundTitle?: string;
  notFoundIcon?: any;
  customClasses?: {
    root?: string;
    list?: string;
    link?: string;
    currentLink?: string;
    icon?: string;
    title?: string;
    separator?: string;
  };
};
