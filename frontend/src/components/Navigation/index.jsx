import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/'>
                    <li>Connexion</li>
                </NavLink>
                <NavLink to='/Signup'>
                    <li>Créer Compte</li>
                </NavLink>
                <NavLink to='/Newsfeed'>
                    <li>Newsfeed</li>
                </NavLink>
                <NavLink to='/Profil'>
                    <li>Mon Profil</li>
                </NavLink>
                <NavLink to='/Users'>
                    <li>Utilisateurs</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;