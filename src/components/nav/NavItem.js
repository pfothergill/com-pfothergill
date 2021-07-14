import { useState } from "react";

export default function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href="#"
        title={props.name}
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}
