# React Breadcrumbs Light

[![GitHub version](https://img.shields.io/badge/version-1.1.3-yellow.svg)](https://github.com/mopcweb/react-breadcrumbs-light/releases) [![npm version](https://img.shields.io/npm/v/react-breadcrumbs-light.svg)](https://www.npmjs.com/package/react-breadcrumbs-light) [![GitHub demo](https://img.shields.io/badge/demo-available-green.svg)](https://mopcweb.github.io/react-breadcrumbs-light) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mopcweb/react-breadcrumbs-light/blob/master/LICENSE)

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

## Breadcrumbs service

Provides function getBreadcrumbs, which returns an array of breadcrumbs. Example:

```js

// Usage
// Argument Routes is specified in next subsection
const crumbs = getBreadcrumbs(Routes, window.location.pathname);

// Returned array
[
  { link: '/', title: 'Home', icon: 'any icon: string | html | component' },
  { link: '/clients', title: 'Clients', icon: '...' },
  { link: '/clients/1', title: 'Client № - 1, welcome!', icon: '...' }
]

```

There are __2 required__ arguments and 2 optional:

| Title         | Type     | Description                                | Default           |
| :-----:       | :------: | :----------------------------------------: | :---------------: |
| __routes *__  | _array_  | array of route objects ([see example below](#routes)) | -      |
| __fullUrl *__ | _string_ | current location full path ([see example below](#fullurl)) | - |
| notFoundTitle | _string_ | title for not found route                  | 'Page Not Found'  |
| notFoundIcon  | _any_    | icon for not found route                   | undefined         |

### Routes

Example:

  ```js

  const Routes = [
    { title: 'Home', link: '/', icon: 'any icon: string | html | svg | component' },
    { title: 'Clients', link: '/clients', icon: '...', children: [
      { title: 'Client № - ', suffix: ', welcome!', link: '/clients/:id', icon: '...' },
      { title: 'Settings', link: '/clients/settings', icon: '✅' }
    ] }
  ];

  ```

__Fields:__

| Title       | Type     | Description                                                       |
| :---------: | :------: | :---------------------------------------------------------------: |
| __link *__  | _string_ | breadcrumb link                                                   |
| title       | _string_ | breadcrumb title                                                  |
| suffix      | _string_ | breadcrumb suffix (added at the end of output breadcrumb title)   |
| icon        | _any_    | breadcrumb icon                                                   |
| children    | _array_  | array of objects, similar to Routes, for nested routes            |

__Features__:

 - If __title__ is not provided, link will be used as breadcrumb title (First letter uppercased)
 - __link__ field may contain dynamic routes (ex.: '/route/:id', just as react-router)
 - For dynamic routes 'title' field will be used as prefix for current pathname (first letter uppercased), if provided

### FullUrl

  It should be a current location, for ex.:

 - __window.location.pathname__
 - If using withRouter HOC of react-router-dom: __location.pathname__ prop

## Breadcrumbs component

Provides a ready to use component. Can be styled and configured.

Example:

```js

// Argument Routes is from section above
<Breadcrumbs routes={Routes} />

```

There is only 1 __required__ argument. And bunch of optional:

| Title          | Type      | Description                                          | Default   |
| :------------: | :-------: | :-----------------------------------------------:    | :-------: |
| __routes *__   | _array_   | array of route objects ([see example above](#routes))| -         |
| separator      | _any_     | separator for crumbs                                 | /         |
| icons          | _boolean_ | whether to show icons                                | true      |
| titles         | _boolean_ | whether to show titles                               | true      |
| notFoundTitle  | _string_  | title for not found pages                     | 'Page Not Found' |
| notFoundIcon   | _any_     | icon for not found pages                             | undefined |
| customClasses  | _object_  | [classes](#customclasses) for each element of Breadcrumbs component | - |

Similar to first required argument for Breadcrumbs service - __Routes__ array.

#### customClasses

| Title       | Type    | Description                   | Html Element              |
| ----------- | ------- | ----------------------------- | ------------------------- |
| root        | string  | class for root element        | nav 	                    |
| list        | string  | class for list element        | ul 		                |
| link        | string  | class for link element        | a 	                    |
| currentLink | string  | class for currentLink element | li   	                    |
| icon        | string  | class for icon element        | span (holder for icon)    |
| title       | string  | class for title element       | span 	                    |
| separator   | string  | class for separator element   | li (holder for separator) |

## License

This project is licensed under the terms of the [MIT license](https://github.com/mopcweb/react-breadcrumbs-light/blob/master/LICENSE).
