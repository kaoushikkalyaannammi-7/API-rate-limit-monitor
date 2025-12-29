import { NavLink } from "react-router-dom";
import '../styles/main.css';

function Navbar() {
  return (
   <nav className="navbar" data-testid="navbar">
      <ul>
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? 'active' : ''}
            data-testid="nav-dashboard"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => isActive ? 'active' : ''}
            data-testid="nav-profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active' : ''}
            data-testid="nav-about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active' : ''}
            data-testid="nav-contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => isActive ? 'active' : ''}
            data-testid="nav-settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

