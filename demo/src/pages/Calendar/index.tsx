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

// =====> Type
type Props = {
  classes: { [x: string]: string };
};

/* ------------------------------------------------------------------- */
/*                              Component
/* ------------------------------------------------------------------- */

const Calendar: React.FC<Props> = () => {
  // Months
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  // Render
  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>Calendar works</div>

      <div style={{
         margin: '40px auto', display: 'flex', justifyContent: 'space-between',
         flexWrap: 'wrap'
      }}>
        {months.map(item => (
          <Link to={`${calendar}/${item}`} key={item} style={{ width: '25%' }}>
            <Button>Select {item}</Button>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

export default Calendar
