/* ################################################################### */
/*
/*  NotFound component
/*
/* ################################################################### */

import React from 'react';
import { Link } from 'react-router-dom';

/* ------------------------------------------------------------------- */
/*                              Material
/* ------------------------------------------------------------------- */

import { withStyles } from '@material-ui/styles';

// =====> Components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* ------------------------------------------------------------------- */
/*                               Config
/* ------------------------------------------------------------------- */

// =====> Static img
import img from './img.jpg';

// =====> Routes
import { home } from '../../utils/routes';

// =====> Styles
import styles from './styles';

type Props = {
  classes: { [x: string]: string };
};

/* ------------------------------------------------------------------- */
/*                              Component
/* ------------------------------------------------------------------- */

const NotFound: React.FC<Props> = ({ classes }) => {
  // Render
  return (
    <div className={classes.NotFound}>
      <Card className={classes.Card}>
        <Link to={home}>
          <CardActionArea>
            <CardMedia
              className={classes.Img}
              image={img}
              title='Page not found'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                404
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Sorry, it seems like this page not found
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Link to={home}>
            <Button size="small" color="primary">
              Try search from the beginning
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
};

/* ------------------------------------------------------------------- */
/*                               Export
/* ------------------------------------------------------------------- */

export default  withStyles(styles)(NotFound);
