import DropdownMenu from "./DropdownMenu";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import { ReactComponent as BellIcon } from "../../icons/bell.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
const Header = () => {
  return (
    <Navbar>
      <NavItem name="Add blog" icon={<PlusIcon />} />
      <NavItem name="Notifications" icon={<BellIcon />} />

      <NavItem name="More" icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
};

export default Header;
