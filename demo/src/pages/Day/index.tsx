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
import { home } from '../../utils/routes';

// =====> Type
type Props = {
  classes: { [x: string]: string };
};

/* ------------------------------------------------------------------- */
/*                              Component
/* ------------------------------------------------------------------- */

const Day: React.FC<Props> = () => {
  // Current day
  const day: string = window.location.pathname.replace(/^\/.*\//, '');

  // Render
  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>Your choice: {day}</div>

      <div style={{ margin: '40px auto', display: 'flex', justifyContent: 'space-around' }}>
        <Link to={home}>
          <Button>Go home</Button>
        </Link>
      </div>
    </Fragment>
  )
};

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

export default Day
