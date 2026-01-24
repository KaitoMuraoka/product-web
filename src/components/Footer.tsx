import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-content">
                <div className="footer-links">
                    <Link to="/hashdpotato/privacy">Privacy Policy (HashdPotato)</Link>
                    <Link to="/meetcuckoo/privacy">Privacy Policy (MeetCuckoo)</Link>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} ProductRepo. All rights reserved.</p>
            </div>
        </footer>
    );
};
