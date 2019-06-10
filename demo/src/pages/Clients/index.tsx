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

const Clients: React.FC<Props> = () => (
  <Fragment>
    <div style={{ textAlign: 'center' }}>Clients list works</div>

    <div style={{ margin: '40px auto', display: 'flex', justifyContent: 'space-around' }}>
      <Link to={`${clients}/Some awesome client`}>
        <Button>Go to Some awesome client</Button>
      </Link>
      <Link to={`${clients}/settings`}>
        <Button>Go to clients Settings</Button>
      </Link>
    </div>
  </Fragment>
);

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

export default Clients
