import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* Logo */}
      <Link to="/" className="logo">🎥 Movie App</Link>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
