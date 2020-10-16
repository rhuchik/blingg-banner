import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-danger">
      <a href='/' className="logo text-white" style={{textDecoration:'none'}}>
         
        <h2><i className="fa fa-github" />Blingg Assignment</h2>
      </a>
      <ul className= 'navbar-nav mx-4 ' style={style}>
        <li className='nav-item mx-4  text-white active'>
          <Link to='/upload' className="btn btn-dark" style={{ color: '#FFF' }}>Upload Banners</Link >
        </li>
        
      </ul>
       </nav> 
  );
};
const style={
  display: 'flex',
  color:'white',
  flexDirection:'row',
  justifyContent:'space-around',

  textDecoration: 'none'
}
export default Navbar;
