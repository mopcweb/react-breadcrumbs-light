/* ################################################################### */
/*
/*  Settings component
/*
/* ################################################################### */

import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

/* ------------------------------------------------------------------- */
/*                              Material
/* ------------------------------------------------------------------- */

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

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

const Clients: React.FC<Props> = () => {
  // Default client
  const defaultClient: string = 'Some awesome client';

  // State for client name
  const [client, setClient]: [string, Function] = useState(defaultClient);

  // Handle input change
  const handleChange = (e: any) => setClient(e.target.value || defaultClient);

  // Render
  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>Clients list works</div>

      <div style={{ margin: '40px auto', display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, width: '50%' }}>
          <Input
            placeholder='Set client name to navigate to'
            style={{ margin: '0 20px', flexGrow: 1 }}
            onChange={handleChange}
          />
          <Link to={`${clients}/${client}`}>
            <Button>Go to {client}</Button>
          </Link>
        </div>

        <Link to={`${clients}/settings`} style={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
          <Button>Go to clients Settings</Button>
        </Link>
      </div>
    </Fragment>
  )
};

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

export default Clients
