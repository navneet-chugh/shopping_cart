import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="nav-bar">
            <div>
            <span>Shopping Cart</span>
            </div>
            <div className="page-links">
                <NavLink to={"/"}>Home Page</NavLink>
                <NavLink to={"/CartPage"}>Cart Page</NavLink>
            </div>            
        </div>
    )
}

export default Navbar;