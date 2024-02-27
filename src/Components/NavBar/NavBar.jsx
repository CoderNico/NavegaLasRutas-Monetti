import {CartWidget} from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <>  
            <Navbar className="d-flex justify-content-around mt-2 ">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img className="logo"
                            alt="logo"
                            src="https://cdn-icons-png.flaticon.com/128/4049/4049083.png"
                            width="80"
                            height="80"
                            />
                            Fútbol Maniatic
                        
                        </Navbar.Brand>
                    </Link>
                    <Nav>
                        <Link to="/category/guantes">
                            <Nav.Link className="paginasNav" href="guantes"><font color="black">Guantes de portero</font></Nav.Link>
                        </Link>
                        <Link to="/category/botas">
                            <Nav.Link className="paginasNav" href="botas"><font color="black">Botas de fútbol</font></Nav.Link>
                        </Link>
                        <Link to="/category/equipacion">
                            <Nav.Link className="paginasNav" href="equipacion"><font color="black">Equipaciónes</font></Nav.Link>
                        </Link>
                        <Link to="/category/accesorios">
                            <Nav.Link className="paginasNav" href="accesorios"><font color="black">Accesorios</font></Nav.Link>
                        </Link>
                    </Nav>
                    <Link to="/Cart">
                        <CartWidget />
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}
