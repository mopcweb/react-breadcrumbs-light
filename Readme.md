
# React Breadcrumbs Light

[![GitHub version](https://img.shields.io/badge/version-1.1.0-yellow.svg)](https://github.com/mopcweb/react-breadcrumbs-light/releases) [![GitHub demo](https://img.shields.io/badge/demo-available-green.svg)](https://mopcweb.github.io/react-breadcrumbs-light) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mopcweb/react-breadcrumbs-light/blob/master/LICENSE)

## Demo

[See demo here](https://mopcweb.github.io/react-breadcrumbs-light)

## Description

Easy to use breadcrumbs for React.

The package includes:

 - Service: just call it in some root component and it will be returning current breadcrumbs array
 - Breadcrumbs component: just import and use it. Could be manually configured and styled
 - TS Types for both

## Installation

```bash

npm i react-breadcrumbs-light

```

## Breadcrumbs service (function getBreadcrumbs)

Returns an array of breadcrumbs. Example:

```js

[
  { link: '/', title: 'Home', icon: 'any icon: string | html | component' },
  { link: '/clients', title: 'Clients', icon: '...' },
  { link: '/clients/1', title: 'Client № - 1', icon: '...' }
]

```

There are 2 require arguments and 2 optional:

### Breadcrumbs service required arguments:

1. __Routes__

  Example:

  ```js

  const Routes = [
    { title: 'Home', link: '/', icon: 'any icon: string | html | svg | component' },
    { title: 'Clients', link: '/clients', icon: '...', children: [
      { title: 'Client № - ', link: '/clients/:id', icon: '...' },
      { title: 'Settings', link: '/clients/settings', icon: '✅' }
    ] }
  ];

  ```

__Required fields__:
| Title | Type   | Description      |
| ----- | ------ | ---------------- |
| link  | string | breadcrumb link  |

__Optional fields:__
| Title | Type   | Description      |
| ----- | ------ | ---------------- |
| title | string | breadcrumb title |
| icon  | any    | breadcrumb icon  |

__Features__:

 - if __title__ is not provided, link will be used as breadcrumb title (First letter uppercased)
 - __link__ field may contain dynamic routes (ex.: '/route/:id', just as react-router)
 - for dynamic routes 'title' field will be used together with current route, if provided.

 2. __FullUrl__

  It should be a current location, for ex.:

 - __window.location.pathname__
 - if using withRouter HOC of react-router-dom: __location.pathname__ prop


### Breadcrumbs service optional arguments:

| Title         | Type   | Description               | Default          |
| ------------- | ------ | ------------------------- | ---------------- |
| notFoundTitle | string | title for not found route | 'Page Not Found' |
| notFoundIcon  | any    | icon for not found route  | undefined        |

## Breadcrumbs component

Provides a ready to use component. Can be styled and configured.

Example:

```js

<Breadcrumbs routes={routes} />

```

There is only 1 required argument. And bunch of optional.

### Breadcrumbs component required argument

Similar to first required argument for Breadcrumbs service - __Routes__ array

### Breadcrumbs component optional argument

| Title          | Type    | Description               | Default          |
| -------------- | ------- | ------------------------- | ---------------- |
| separator      | any     | separator for crumbs      | '/'              |
| icons          | boolean | whether to show icons     | true             |
| titles         | boolean | whether to show titles    | true             |
| notFoundTitle  | string  | title for not found pages | 'Page Not Found' |
| notFoundIcon   | any     | icon for not found pages  | undefined        |
| customClasses  | object  | classes for each element of Breadcrumbs component | - |

__customClasses__

| Title       | Type    | Description                   | Html Element              |
| ----------- | ------- | ----------------------------- | ------------------------- |
| root        | string  | class for root element        | nav 	                    |
| list        | string  | class for list element        | ul 		                    |
| link        | string  | class for link element        | a 	                      |
| currentLink | string  | class for currentLink element | li   	                    |
| icon        | string  | class for icon element        | span (holder for icon)    |
| title       | string  | class for title element       | span 	                    |
| separator   | string  | class for separator element   | li (holder for separator) |
