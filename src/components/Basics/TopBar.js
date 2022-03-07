import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../media/logo/logo.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Pratik from "../../media/top-bar/1.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import OutsideClickHandler from "react-outside-click-handler";

const TopBar = () => {
  const notificationCount = 1;
  const [menu, setMenu] = useState(1);
  return (
    <div className="top-bar">
      {/* ---------- */}
      {/* Logo */}
      <div className="logo-top">
        <img src={Logo} alt="Logo" />
      </div>
      {/* ---------- */}
      {/* Desktop */}
      <div className="desktop-view">
        <div className="top-right-items">
          <Link className="top-right-item top-link" to="/">
            FAQ
          </Link>
          <Link className="top-right-item top-link" to="/">
            Feedback
          </Link>
          <div className="top-right-item top-notify">
            {notificationCount > 0 && <div className="notify-circle"></div>}
            <NotificationsNoneOutlinedIcon />
          </div>
          <Link to="/" className="top-right-item profile">
            <img src={Pratik} alt="Logo" />
            &nbsp; &nbsp;
            <div className="profile-name">Pratik Kumar</div>
          </Link>
        </div>
      </div>
      {/* ---------- */}
      {/* Mobile */}
      <div className="mobile-view">
        <div className="hamburger">
          {menu === 1 ? (
            <MenuIcon onClick={() => setMenu(2)} />
          ) : (
            <CloseIcon onClick={() => setMenu(1)} />
          )}
        </div>
        <OutsideClickHandler onOutsideClick={() => setMenu(1)}>
          {menu === 2 && (
            <div className="top-right-items">
              <Link className="top-right-item top-link" to="/">
                FAQ
              </Link>
              <Link className="top-right-item top-link" to="/">
                Feedback
              </Link>
              <div className="top-right-item top-notify">
                {notificationCount === 1 && (
                  <div className="notify-circle"></div>
                )}
                <NotificationsNoneOutlinedIcon />
              </div>
              <Link to="/" className="top-right-item profile">
                <img src={Pratik} alt="Logo" />
                &nbsp; &nbsp;
                <div className="profile-name">Pratik Kumar</div>
              </Link>
            </div>
          )}
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default TopBar;
