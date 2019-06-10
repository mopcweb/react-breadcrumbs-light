/* ################################################################### */
/*
/*  Service which provides small useful functions (methods)
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                      Convert into FormData
/* ------------------------------------------------------------------- */

export const formUrlEncoded = (x: any) =>
   Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

/* ------------------------------------------------------------------- */
/*                       Remove params from url
/* ------------------------------------------------------------------- */

export const removeParams = (url: string): string => url.replace(/\?.*/gi, '');

/* ------------------------------------------------------------------- */
/*                       Check if object isEmpty
/* ------------------------------------------------------------------- */

export const isEmpty = (obj: { [x: string]: any }): boolean => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  };

  return true;
};

/* ------------------------------------------------------------------- */
/*                       Get max days in month
/* ------------------------------------------------------------------- */

export const getDaysInMonth = (month: number) =>
  new Date(new Date().getFullYear(), month, 0).getDate();

/* ------------------------------------------------------------------- */
/*                       Uppercase first letter
/* ------------------------------------------------------------------- */

export const makeFirstLetterUp = (item: string): string =>
  item.slice(0, 1).toUpperCase() + item.slice(1);

/* ------------------------------------------------------------------- */
/*                             Find param
/* ------------------------------------------------------------------- */

export const findParam = (link: string): boolean =>
  link.indexOf('/:') !== -1;

/* ------------------------------------------------------------------- */
/*                  Find min length & it's link index
/* ------------------------------------------------------------------- */

export const findMin = (arr: any) => {
  // Define first vars
  let min = arr[0].link.length;
  let index: number = 0;

  // Iterate over array
  for (let i = 1; i < arr.length; i++) {
    // Define current link length
    let v = arr[i].link.length;

    // Update if is less
    min = (v < min) ? v : min;

    // Update index
    if (min === v)
      index = i;
  };

  // Return
  return { min, index };
};
