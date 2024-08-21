import React from "react";

function NavBar(){
    return(
        <div className="navbar">
            <div><h1>Blogs</h1></div>
            <div className="searchBar"><input type="text" placeholder="Buscar"/><button>Buscar</button></div>
        </div>
    )
}

export default NavBar;