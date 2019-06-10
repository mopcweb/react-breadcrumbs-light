/* ################################################################### */
/*
/*  Settings component
/*
/* ################################################################### */

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/* ------------------------------------------------------------------- */
/*                              Material
/* ------------------------------------------------------------------- */

import Button from '@material-ui/core/Button';

/* ------------------------------------------------------------------- */
/*                               Config
/* ------------------------------------------------------------------- */

// =====> Routes
import { calendar } from '../../utils/routes';

// =====> Services
import { getDaysInMonth } from '../../services';

// =====> Type
type Props = {
  classes: { [x: string]: string };
};

/* ------------------------------------------------------------------- */
/*                              Component
/* ------------------------------------------------------------------- */

const Month: React.FC<Props> = () => {
  // Months
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  // Current month
  const month: string = window.location.pathname.replace(/^\/.*\//, '');

  // Current month index
  const monthIndex: number = months.findIndex(item => item === month);

  // Month days
  const dates: number[] = [];

  // Push into array
  let day = 1;
  while (day <= getDaysInMonth(monthIndex + 1))
    dates.push(day++);

  // Render
  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>Your choice: {month}</div>

      <div style={{
         margin: '40px auto', display: 'flex', justifyContent: 'flex-start',
         flexWrap: 'wrap'
      }}>
        {dates.map(item => (
          <Link to={`${calendar}/${month}/${item}th`} key={item} style={{ width: '25%' }}>
            <Button style={{ width: '100%' }}>Select {item}th</Button>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

export default Month
