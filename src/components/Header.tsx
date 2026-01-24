import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="container header-content">
                <Link to="/" className="logo">
                    とんとんぼ's <span className="logo-accent">ProductRepo</span>
                </Link>
                <nav className="main-nav">
                    <Link to="/">Home</Link>
                    <Link to="/hashdpotato">HashdPotato</Link>
                    <Link to="/meetcuckoo">MeetCuckoo</Link>
                </nav>
            </div>
        </header>
    );
};
