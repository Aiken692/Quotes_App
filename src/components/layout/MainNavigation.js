import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <il>
                    <NavLink to='/quotes' className={classes.active}>AllQuotes</NavLink>
                </il>
            </ul>
            <ul>
                <il>
                    <NavLink to='/new-quote' className={classes.active}>Add a Quote !</NavLink>
                </il>
            </ul>
        </nav>
    
    </header>
  )
}

export default MainNavigation