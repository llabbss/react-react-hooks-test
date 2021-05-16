import React from 'react'
import PropTypes from 'prop-types';
import  { Link } from "react-router-dom";

const Navbar = ({icon,title})=> {
  // 设置默认属性值
  
  // 定义属性类型
  
    return (
      <nav className="navbar bg-primary">
        <h1><i className={icon}></i>{title}</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about?id=1">About</Link></li>
        </ul>
      </nav>
    )
}
Navbar.defaultProps={
  title:'Github Finder',
  icon:'fa fa-icon'
}
Navbar.propTypes = {
  title:PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired
}
export default Navbar
