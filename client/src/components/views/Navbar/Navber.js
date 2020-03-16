import React from "react";
import { Drawer, Button, Icon } from "antd";
function Navber() {
    return (
        <nav className='menu'>
            <div className='menu__logo'>
                <a href='/'>Logo</a>
            </div>
            <div className='menu__container'></div>
        </nav>
    );
}

export default Navber;
