export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo">PFOTHERGILL</div>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
