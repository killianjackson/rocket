import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../../UI/Logo/Logo';

const toolbar = () => (
  <header className={classes.Toolbar}>
    <Logo />
    <h1>Rocket</h1>
  </header>
);

export default toolbar;