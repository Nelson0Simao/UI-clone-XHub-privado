import React from 'react'
import './style.scss'
import logo from './../../assets/logo.svg'
import { FaBeer } from "react-icons/fa";

function AsideSecand(){
  return(
    <div class="header">
    <div class="header-main">
          <img src={logo} class="logo" />
    <form>
        <div class="search">
              <FaBeer />
              <input type="text" placeholder="Buscar no TestHub"/>
              <button class="btn white">Carregar</button>
              <button class="btn orange">Upgrade</button>
        </div>
    </form>
    <div class="register">
      <button class="login">Login</button>
      <button class="register">Registra-se</button>
    </div>
      </div>
    </div>
  )
}

export default AsideSecand;
