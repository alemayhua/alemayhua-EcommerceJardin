import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useCartContext } from '../../Context/CartContext.js';

const Menu = () => {
  const { cantidadTotal } = useCartContext();
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/cart'><Carrito />{ cantidadTotal() !== 0 && cantidadTotal()}</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link to='/'>Inicio</Link></Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link to='/categoria/plantas'>Plantas</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item> <Link to='/categoria/herramientas'>Herramientas</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to='/categoria/accesorios'>Accesorios</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;