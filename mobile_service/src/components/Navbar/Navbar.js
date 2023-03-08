import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaCashRegister} from 'react-icons/fa';
import { FcAbout, FcViewDetails } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { ImEnter, ImExit } from "react-icons/im";

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><Link to="/"><FcHome/></Link></li>
          <li><Link to="/register"><FaCashRegister /></Link></li>
          <li><Link to="/complaints"><FcViewDetails /></Link></li>
          <li><Link to="/about"><FcAbout /></Link></li>
          <li className='login'>
            <Link to="/signin"><button><ImEnter/></button></Link>
            <Link to="/signup"><button><ImExit/></button></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;