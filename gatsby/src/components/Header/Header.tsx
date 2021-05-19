import React from "react";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderLeft from "./HeaderLeft/HeaderLeft";

import "./Header.scss";

const Header = () => {
    return (
        <nav className="Header" aria-label="primary">
            <div className="grid-item">
                <HeaderRight />
            </div>
            <div className="grid-item">
                <HeaderCenter />
            </div>
            <div className="grid-item">
                <HeaderLeft />
            </div>
        </nav>
    );
};

export default Header;
