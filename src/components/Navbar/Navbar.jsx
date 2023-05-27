import { useState } from 'react';
import './Navbar.css';
import UserInfo from '../FetchUser/UserInfo';

const Navbar = () => {
    const [isTableView, setTableView] = useState(false);

    const handleToggleView = () => {
        setTableView(!isTableView);
    };

    return (
        <div>
            <nav>
                <ul className="nav-bar">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                </ul>
            
            <div className="view-toggle">
                <button className= "view-toggle-btn" onClick={handleToggleView}>
                    {isTableView ? 'View Card' : 'View Table'}
                </button>
            </div>
            </nav>
            <UserInfo isTableView={isTableView}/>
        </div>
    );
};

export default Navbar;
