import React, { Component } from 'react'
import {Link} from 'react-router-dom'



function Navbar() {
    return(
        <ul>
            <li><Link to="/ownership">Ownership</Link> </li>
        </ul>
    )
    
}

export default Navbar