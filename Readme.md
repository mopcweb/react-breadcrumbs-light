# React Breadcrumbs Light

Soon will be provided demo page on github

Easy to use breadcrumbs for React.

The package includes:
  * Breadcrumbs component: just import and use it. Could be manually configured and styled.
  * Service: just call it in some root component and it will be returning current breadcrumbs
  * Types for both

## Installation

```bash

npm i react-breadcrumbs-light

```

## Breadcrumbs service (function getBreadcrumbs)

Returns array of breadcrumbs. Example:

```js

[
  { link: '/', title: 'Home', icon: 'any icon: string | html | component' },
  { link: '/clients', title: 'Clients', icon: '...' },
  { link: '/clients/1', title: 'Client № - 1', icon: '...' }
]

```

There is 2 require arguments and 2 optional:

### Required:

1. Routes

  Example:

  ```js

  const routes = [
    { title: 'Home', link: '/', icon: 'any icon: string | html | component' },
    { title: 'Clients', link: '/clients', icon: '...', children: [
      { title: 'Client № - ', link: '/clients/:id', icon: '...' },
      { title: 'Settings', link: '/clients/settings', icon: '✅' }
    ] }
  ]

  ```

  In Routes array for each object the only _necessary_ field is 'link', which used as breadcrumb
  and as 'title', if it is not provided.

  'link' field may contain dynamic routes (ex.: '/route/:id', just as react-router).
  For dynamic routes 'title' field will be used together with current route, if provided.

  _Optionals_ are:
    * title (string) -> title to show
    * icon (any: string | html | component) -> icon to show
    * children (array as Routes array itself) -> for nested routes.

2. FullUrl

  Current location:
    * window.location.pathname
    * if using withRouter HOC of react-router-dom: location.pathname

### Optional:

1. notFoundTitle (string) - title for not found route. Default - 'Page Not Found'
2. notFoundIcon (any) - icon for not found route. Default - undefined

## Breadcrumbs component

Provides a ready to use component. Can be styled and configured.

Example:

```js

<Breadcrumbs routes={routes} />

```

There is only 1 required argument. And bunch of optional.

### Required

Similar to first required argument for Breadcrumbs service

### Optional

* separator (any icon: string | html | component) -> separator for crumbs. Default: '/'
* icons (boolean) -> whether to show icons. Default: true
* titles (boolean) -> whether to show icons. Default: true
* notFoundTitle (string) -> title for not found pages. Default: 'Page Not Found'
* notFoundIcon (any icon: string | html | component) -> icon for not found pages. Default: undefined
* customClasses (object) -> classes for each element of Breadcrumbs component.
  * root (string) -> class for root element (nav)
  * list (string) -> class for list element (ul)
  * link (string) -> class for link element (react-router-dom Link component. Html 'a' element)
  * currentLink (string) -> class for currentLink element (li)
  * icon (string) -> class for icon element (span, which holds provided icon)
  * title (string) -> class for title element (span)
  * separator (string) -> class for separator element (li, which holds provided separator)
