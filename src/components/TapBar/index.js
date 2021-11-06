import React from 'react';
import './style.css';
import {
  RiHomeLine,
  RiShoppingBagLine,
  RiBankCardLine,
  RiChat3Line,
  RiTimeLine
} from "react-icons/ri";
import { 
  SiMastercard,
  SiVisa,
  SiAmericanexpress
 } from 'react-icons/si';


export default () => {
  return (
    <div className="tapbar-container">
      <a href="">
        <RiHomeLine className="tapbar-icon" />
      </a>
      <a href="">
        <RiShoppingBagLine className="tapbar-icon" />
      </a>
      <a href="">
        <RiBankCardLine className="tapbar-icon" />
      </a>
      <a href="">
        <RiChat3Line className="tapbar-icon" />
      </a>
      <a href="">
        <RiTimeLine className="tapbar-icon" />
      </a>
    </div>
  );  
}
