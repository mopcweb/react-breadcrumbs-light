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
import { clients } from '../../utils/routes';

// =====> Type
type Props = {
  classes: { [x: string]: string };
};

/* ------------------------------------------------------------------- */
/*                              Component
/* ------------------------------------------------------------------- */

const Client: React.FC<Props> = () => (
  <Fragment>
    <div style={{ textAlign: 'center' }}>This is client component</div>

    <div style={{ margin: '40px auto', display: 'flex', justifyContent: 'space-around' }}>
      <Link to={`${clients}/Some awesome client/oops/route/not/found`}>
        <Button>Go to some undefined route</Button>
      </Link>
    </div>
  </Fragment>
);

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

export default Client
