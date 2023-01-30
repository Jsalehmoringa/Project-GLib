import React from "react";
import { Link } from "react-router-dom";
import image from "../GLib/books.jpg"


function Homepage() {
    
    return (
        <div className="home">
            <nav className="nav-home">
                <Link to="/login">Log In</Link>
            </nav>
            <div className="overlay" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <h1>G-Lib</h1>
                <p>G-lib is a web application that acts as a library for books that the user can use.</p>
                <p>It enables the user to browse through a majority of books available.</p>
                <p>Authenticated users can also create a custom bookshelf where they can keep a library of books that interest them.</p> 
            </div>
        </div>
    )
}

export default Homepage;