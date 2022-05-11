import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <NavLink
                    className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                    aria-current="page"
                    to="/"
                >
                    Main
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                    to="/login"
                >
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                    to="/users"
                >
                    Users
                </NavLink>
            </li>
        </ul>
    );
};

export default NavBar;
<NavLink
    to="/faq"
    className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}
>
    FAQs
</NavLink>;
