


import React from "react"
import { Outlet } from "react-router-dom"

function MainHeader () {
    return (

        <div>
            
            {/* Allow all childs to render */}
            <Outlet>

            </Outlet>
        
        </div>

     
    )
}

export default MainHeader