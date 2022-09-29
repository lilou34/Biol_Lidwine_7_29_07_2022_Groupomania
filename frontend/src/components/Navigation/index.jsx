import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Fil d'actualité</li>
                </NavLink>
                
                <NavLink to='/Profil' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Mon Profil</li>
                </NavLink>
                <NavLink to='/Users' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Utilisateurs</li>
                </NavLink>
                <NavLink to='/Users' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Déconnexion</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
/*
<NavLink to='/Login'>
    <li>Connexion</li>
</NavLink>
<NavLink to='/Signup'>
    <li>Créer Compte</li>
</NavLink>
*/