import React from "react";

const year = new Date().getFullYear()
function Footer(){
    return(
        <footer className="Footer"><p>&copy; Aury and Darlin coding React. .inc {year}</p></footer>
    )
}

export default Footer;