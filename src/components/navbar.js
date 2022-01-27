import { useState, useEffect, useRef  } from 'react'

import '../assets/fontawesome-free-5.15.4-web/css/all.css'
import '../assets/css/navbar.css'
import '../assets/css/general.css'
import avatar from '../assets/images/1.jpg'

function NavBar({navCategory, notify}) {

    const [category, setCategory] = useState(navCategory.current[0])
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)

    function LogoContainer() {
        return (
            <div className="logo-container center">antBlog</div>
        )
    }

    function WriteBlogBtn() {
        return (
            <div className="btn create-btn center">
                <i className="fas fa-plus"></i>
                <span>Write</span>
            </div>
        )
    }

    function SearchBox() {
        return (
            <div className='search-box flex flex-1'>
                <label htmlFor='search-input' className='center'>
                    <i className="fas fa-search"></i>
                </label>
                <input id='search-input' className='flex-1' placeholder='Search posts'></input>
            </div>
        )
    }

    function NavigateBox() {
        return (
            <div className='navigate-box center' onClick={handleNavigate}>
                <div className='navigate-selection flex'>
                    {category.icon}
                    <span className='flex-1'>{category.name}</span>
                    <i className="fas fa-caret-down"></i>
                </div>
                {isCategoryOpen && <NavigateOption />}
            </div>
        )
    }

    function NavigateOption() {
        return (
            <div className='navigate-container'>
                {navCategory.current.map((item) => {
                    return (
                        <div
                            key={item.id}
                            id={item.id}
                            className='navigate-option flex'
                            onClick={() => handleSetNav(item)}
                        >
                            {item.icon}
                            <span className='flex-1'>{item.name}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

    function handleNavigate() {
        if (isCategoryOpen === false) {
            setIsCategoryOpen(true)
        } else {
            setIsCategoryOpen(false)
        }
    }

    function handleSetNav(item) {
        setCategory(item)
    }

    function Team() {
        return (
            <div className='btn option-item center tooltip' id='_team'>
                <i className="fas fa-users"></i>
            </div>
        )
    }

    function Notification() {
        return (
            <div className='btn option-item center tooltip' id='_notify'>
                <i className="fas fa-bell"></i>
            </div>
        )
    }

    function User() {
        return (
            <div className='user-container center'>
                <img src={avatar} alt=''></img>
            </div>
        )
    }

    return (
        <nav className="navbar flex">
            <div className="navbar-left flex">
                <LogoContainer />
                <WriteBlogBtn />
            </div>
            <div className="navbar-center flex center flex-1">
                <SearchBox />
                <NavigateBox />
            </div>
            <div className="navbar-right flex">
                <Team />
                <Notification />
                <User />
            </div>
        </nav>
    )
}

export default NavBar