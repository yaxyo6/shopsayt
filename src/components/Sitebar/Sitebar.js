import React from 'react'
import { Link } from 'react-router-dom'
import './sitebar.css'
 
export function Sitebar() {
    return (
        <div className="sitebar">
            <Link to="/home" >home</Link>
            <Link to='/basket'>basket</Link>


        </div>
        
    )
}

