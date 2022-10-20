import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <li className="list-group-item">Tuiter</li>
            <li className={`list-group-item ${active === 'home'?'active':''}`}>
                Home
            </li>
            <li className={`list-group-item ${active === 'explore'?'active':''}`}>
                Explore
            </li>
            <li className={`list-group-item ${active === 'notifications'?'active':''}`}>
                Notifications
            </li>
            <li className={`list-group-item ${active === 'messages'?'active':''}`}>
                Messages
            </li>
            <li className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </li>
            <li className={`list-group-item ${active === 'lists'?'active':''}`}>
                Lists
            </li>
            <li className={`list-group-item ${active === 'profile'?'active':''}`}>
                Profile
            </li>
            <li className={`list-group-item ${active === 'more'?'active':''}`}>
                More
            </li>
        </div>
    );
};
export default NavigationSidebar;