import React from 'react'
import './Navbarvieja.css';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbarvieja = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark menu">
                <div class="container-fluid">
                    <a class="navbar-brand p-2" href="./index.html"><img class="menu__logo" src={logo}
                        alt="logo_menu" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Categorias
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item desplegable" href="#">Tecnologia</a></li>
                                    <li><a class="dropdown-item desplegable" href="#">Hogar</a></li>
                                    <li><a class="dropdown-item desplegable" href="#">Deportes</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./index.html">Empresa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./index.html">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./index.html">Contacto</a>
                            </li>

                        </ul>

                        <CartWidget />


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarvieja