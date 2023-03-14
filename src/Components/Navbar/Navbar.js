import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
//import Dropdown from "bootstrap";
export default function Navbar() {
    return (
        <div>
            <navbar className="navbar">
                <div className="head">
                  <h2>Site Logo</h2>
                </div>
                <Link to={"/"} style={{ color: "white", padding: "5px" }}>
                    <p>Home</p>
                </Link>
                <Link to={"/aboutus"} style={{ color: "white", padding: "5px" }}>
                    <p>About-us</p>
                </Link>
                <Link to={"/services"} style={{ color: "white", padding: "5px" }}>
                    <p>Services</p>
                </Link>
                <Link to={"/products"} style={{ color: "white", padding: "5px" }}>
                    <p>Products</p>
                </Link>
               <input className="searchbar" type={Text} placeholder="Search..."></input>
               <Link to={"/cart"} style={{ color: "white", padding: "5px" }}>
                    <p>Cart</p>
                </Link>
               <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button">Category</button></li>
                        <li><button class="dropdown-item" type="button">Brand</button></li>
                        <li><button class="dropdown-item" type="button">Size</button></li>
                    </ul>
                </div>
                <Link to={"/signin"} style={{ color: "white", padding: "5px" }}>
                    <p>Sign In</p>
                </Link>
            </navbar>
        </div>
    );
}
