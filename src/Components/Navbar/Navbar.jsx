
import './Navbar.css';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Navbarvieja = ({cantidadCarrito}) => {

   
    const [search, setSearch] = useState('')


    const handleSubmit = () => {
        
    }

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase())
    }





    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark menu">
                <div className="container-fluid">
                    <Link className="navbar-brand p-2" ><Link to={'/'}><img className="menu__logo" src={logo}
                        alt="logo_menu" /></Link></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Categorias
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={'category/men\'s clothing'} className="dropdown-item desplegable" >Ropa Hombres</Link></li>
                                    <li><Link to={'category/women\'s clothing'} className="dropdown-item desplegable" >Ropa Mujeres</Link></li>
                                    <li><Link to={'category/electronics'} className="dropdown-item desplegable" >Electronica</Link></li>
                                    <li><Link to={'category/jewelery'} className="dropdown-item desplegable" >Joyería</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page">Empresa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page">Contacto</Link>
                            </li>

                        </ul>
                        <form className="d-flex p-2" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Producto" aria-label="Search" onChange={handleChange} />
                            <Link to={`search/${search}`} className="btn btn-outline-light">Buscar</Link>
                            
                        </form>

                        <CartWidget cantidadCarrito={cantidadCarrito} />


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarvieja