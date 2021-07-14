import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import ProfilePicture from "../../img/profile_pic.png";

export default function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main"); // Options: main, settings, animals
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        title={props.name}
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.profilePic ? (
          <span className="icon-button">
            <img className="profile-pic" src={props.profilePic}></img>
          </span>
        ) : (
          <span className="icon-button">{props.leftIcon}</span>
        )}
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames="menu-primary"
      >
        <div className="menu">
          <Link to="./profile-page">
            <DropdownItem
              to="../pages/profile-page"
              profilePic={ProfilePicture}
              name="Go to your profile"
            >
              My Profile
            </DropdownItem>
          </Link>
          <DropdownItem leftIcon={<CogIcon />} goToMenu="animals">
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropdownItem leftIcon="🐶">Dog</DropdownItem>
          <DropdownItem leftIcon="🐱">Cat</DropdownItem>
          <DropdownItem leftIcon="🐻">Bear</DropdownItem>
          <DropdownItem leftIcon="🐼">Panda</DropdownItem>
          <DropdownItem leftIcon="🦁">Lion</DropdownItem>
          <DropdownItem leftIcon="🐷">Pig</DropdownItem>
          <DropdownItem leftIcon="🐵">Monkey</DropdownItem>
          <DropdownItem leftIcon="🦊">Fox</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🐯">Tiger</DropdownItem>
          <DropdownItem leftIcon="🐔">Chicken</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
