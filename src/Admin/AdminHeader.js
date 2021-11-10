import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarBrand
} from 'reactstrap';

// <NavLink href="/admin">Dashboard</NavLink>
// <NavLink href="/admin/events">Events</NavLink>
const AdminHeader = ({url}) =>{
    const [isOpen, setIsOpen] = React.useState(false);
    return(
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">ADMIN PANEL</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to={`${url}/`}>Dashboard</Link> 
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={`${url}/events`}>Events</Link> 
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={`${url}/donations`}>Donations</Link> 
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={`${url}/ngo`}>Ngo</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
};

export default AdminHeader;