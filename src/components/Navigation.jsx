import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Main">Main</Link>
                    </li>
                    <li>
                        <Link to="/Description">Description</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
