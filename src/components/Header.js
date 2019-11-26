import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import my_page from './blank_image.png'
import board from './blank_image.png'
import home from './blank_image.png'
import manual from './blank_image.png'



const Header = () => {
  return(
    <div className="header">
    <div className="main_header">
    <Link to="/Manual" className="Manual_item">
            <div className="hvrbox">
                <img src={manual}  className="hvrbox-layer_bottom"    />
                <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">Manual</div>
                </div>
            </div>
        </Link>
        <Link to="/Home" className="Home_item">
            <div className="hvrbox">
                <img src={home}  className="hvrbox-layer_bottom"    />
                <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">Home</div>
                </div>
            </div>
        </Link>
        <Link to="/About" className="My_page_item">
            <div className="hvrbox">
                <img src={my_page}  className="hvrbox-layer_bottom" />
                <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">My Page</div>
                </div>
            </div>
        </Link>
        <Link to="/Board" className="Board_item">
            <div className="hvrbox">
                <img src={board}  className="hvrbox-layer_bottom" />
                <div className="hvrbox-layer_top">
                   <div className="hvrbox-text">Board</div>
                </div>
            </div>
        </Link>
        {/* <div to="/board" className="Board_item">
            <div className="hvrbox">
                <img src={board}  className="hvrbox-layer_bottom" />
                <div className="hvrbox-layer_top">
                   <a href="http://localhost:8080"><div className="hvrbox-text">게시판</div></a> 
                </div>
            </div>
        </div> */}
    </div>
</div>
    
    
  );
};

export default Header;

