import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/' className={(nav) => (nav.active ? 'nav-active' : "" )}><li>accueil</li></NavLink>
                <NavLink to='/about' className={(nav) => (nav.active ? 'nav-active' : "" )}><li>à propos</li></NavLink>
            </ul>
        </div>
    );
};

export default Navigation;