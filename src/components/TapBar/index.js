import React, { useState } from 'react';
import './style.css';
import {
  RiHomeLine,
  RiShoppingBagLine,
  RiBankCardLine,
  RiChat3Line,
  RiTimeLine
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';


export default () => {

  const [classe, setClass] = useState('tapbar-container');
  let initScrollPos = window.pageYOffset;

  window.onscroll = function () {
    let scrollPosition = window.pageYOffset;

    initScrollPos > scrollPosition ? setClass('tapbar-container') : setClass("tapbar-container--hidden");

    initScrollPos = scrollPosition;
  }
  return (
    <div className={classe}>
      <NavLink exact to="/home" activeClassName="selected">
        <RiHomeLine className="tapbar-icon" />
      </NavLink>
      <NavLink exact to="/shopping" activeClassName="selected">
        <RiShoppingBagLine className="tapbar-icon" />
      </NavLink>
      <NavLink exact to="/cardview" activeClassName="selected">
        <RiBankCardLine className="tapbar-icon" />
      </NavLink>
      <NavLink exact to="/checkingaccount" activeClassName="selected">
        <RiChat3Line className="tapbar-icon" />
      </NavLink>
      <NavLink exact to="/transfers" activeClassName="selected">
        <RiTimeLine className="tapbar-icon" />
      </NavLink>
    </div>
  );
}
