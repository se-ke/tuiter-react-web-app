import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <li className="list-group-item">Tuiter</li>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill"></i>
                <span> Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                <span> Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-asterisk"></i>
                <span> Labs</span>
            </Link>
            <li className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell"></i>
                <span> Notifications</span>
            </li>
            <li className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope"></i>
                <span> Messages</span>
            </li>
            <li className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark"></i>
                <span> Bookmarks</span>
            </li>
            <li className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-card-text"></i>
                <span> Lists</span>
            </li>
            <li className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person"></i>
                <span> Profile</span>
            </li>
            <li className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
                <span> More</span>
            </li>
        </div>
    );
};
export default NavigationSidebar;