import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Card } from '../../Page/Card/Card'
import { Menu } from '../../Page/Menu/Menu'
import { Sitebar } from '../Sitebar/Sitebar'
import './main.css'

 export function Main() {
    return (
        <div className="main">
            <div className="left">
                <Sitebar/>
            </div>
            <div className="right">

                 <Routes>

                    <Route  path="/home" element={  <Menu/>  }/>
                    <Route  path="/basket" element={ <Card/>  }/>
                 </Routes>

            </div>
            
  
           

        </div>
        
    )
}

