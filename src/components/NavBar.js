import './NavBar.css';
import './CartWidget.js';
import Carrito from './CartWidget.js';

const Li = ({ enlace, descripcion }) => {
    return <li><a href={enlace}>{descripcion}</a></li>
}

const SubMenuCategorias = () => {
    return (
        <li className='submenu'>
            <a href="#">Categorias <svg width="15" height="15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m5.25 8.625 6.75 6.75 6.75-6.75"></path>
</svg></a>
            <ul>
                <Li enlace="#" descripcion="Plantas" />
                <Li enlace="#" descripcion="Herramientas" />
                <Li enlace="#" descripcion="Accesorios" />
            </ul>
        </li>
    )
}

const Menu = () => {
    return (
        <nav>
            <ul className='navmenu'>
                <Li enlace="#" descripcion="Inicio" />
                <SubMenuCategorias />
                <Li enlace="#" descripcion="Contacto" />
                <Li enlace="#" descripcion="Quienes somos" />
            </ul>
            <label className="logo">
                <a href='#'><Carrito /></a>
            </label>
        </nav>
    )
}

export default Menu;