import React from "react";
import { NavLink } from "react-router-dom";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";

const LeftNav = () => {
  return (
    <div className="left-nav">
      <div className="nav-items">
        <NavLink
          activeClassName="active-nav-item"
          className="nav-item"
          to="/dashboard"
          exact
        >
          <EqualizerOutlinedIcon fontSize="14" /> &nbsp; Dashboard
        </NavLink>
        <NavLink
          activeClassName="active-nav-item"
          className="nav-item"
          to="/"
          exact
        >
          <MilitaryTechOutlinedIcon fontSize="14" /> &nbsp; Skill Test
        </NavLink>
        <NavLink
          activeClassName="active-nav-item"
          className="nav-item"
          to="/internships"
          exact
        >
          <FileOpenOutlinedIcon fontSize="14" /> &nbsp; Internships
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
