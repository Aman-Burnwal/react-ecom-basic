import { useState } from 'react';
import './header.css'

import {logo, Logo, List } from "../index"

const Header = () => {

  const [isLogin, setIsLogin] = useState("Sign-in");

  const changeLogin = () => {

    isLogin == "Sign-in" ? setIsLogin("Sign-up") : setIsLogin("Sign-in");

    
  }

  return (
    <div className="header">

      <Logo logo={logo} />

      <div className="login-signup">
        <List />
        <button className='btn-login-logout' onClick={changeLogin} >{isLogin}</button>
      </div>

    </div>
  )
}

export default Header;
