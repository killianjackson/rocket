import React from 'react';

import leafLogo from '../../../assets/pedunculate.png';
import classes from './Logo.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={leafLogo} alt='leafLogo'/>
  </div>
);

export default logo;