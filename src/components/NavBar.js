import React from 'react';
import {Link, Navigate} from "react-router-dom";
import logo from '../icon.png';

function NavBar(props) {
    // bootstrap
    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className="logo ms-1 me-4" src={logo} alt="Logo"/>
                        Blog Manager
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">
                                    Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addPost">
                                    Add Post
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/*<nav className="navbar">*/}
            {/*    <div className="container-fluid">*/}
            {/*        <Link className="navbar-brand" to="/">*/}
            {/*            <img className="logo" src={logo} alt="Logo"/>*/}
            {/*            Blog Manager*/}
            {/*        </Link>*/}
            {/*        <ul className="navbar-nav">*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={<Navigate to="/blogs"/>}>*/}
            {/*                Home*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={<Navigate to="/addPost"/>}>*/}
            {/*                New Post*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </div>
    );
}

export default NavBar;