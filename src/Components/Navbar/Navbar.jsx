import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu_icon.png';
import logo from '../../assets/logo.webp';
import search_icon from '../../assets/search-icon.webp';
import upload_icon from '../../assets/upload_icon.webp';
import more_icon from '../../assets/more_icon.png';
import notification_icon from '../../assets/notification_icon.png';
import profile_icon from '../../assets/profile_icon.png';
import { Link } from 'react-router-dom';

const Navbar = ({setSidebar}) => {
    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
                <Link to='/'><img className='logo' src={logo} alt="" /></Link>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
                    <img src={search_icon} alt="" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={profile_icon} className='user-icon' alt="" />
            </div>
        </nav>
    )
}

export default Navbar
