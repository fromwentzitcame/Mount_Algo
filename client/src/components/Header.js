import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'
import {useNavigate} from 'react-router-dom'

function Header() {
    let navigate = useNavigate()
    return (
        <Nav>
            <NavMenu>
               <NavLink className='links' to='/'>
                   <img src="/images/home-icon.svg" alt=''/>
                   <span>HOME</span>
               </NavLink>
               <NavLink className='links' to='/'>
                   <img src="/images/search-icon.svg" alt=''/>
                   <span>SEARCH</span>
               </NavLink>
               <NavLink className='links' to='/'>
                   <img src="/images/play-icon-white.png" alt=''/>
                   <span>PLAY</span>
               </NavLink>
            </NavMenu>
            <Login onClick={() => {navigate('/login')}}>LOGIN</Login>
            

        </Nav>
    )
}
const Nav = styled.nav`
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 25px;
    letter-spacing: 16;
    z-index: 3
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`

const Login = styled.a`
  background-color: white;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background: gray;
    color: #000;
    border-color: white;
  }
`;

export default Header