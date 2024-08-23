


import React from "react"

import { useNavigate } from "react-router-dom"

function Labs () {

    const navigate = useNavigate();

    function clickHandler (){

        navigate("/about")
    }
    return (
        <div>

        <div>

            <h1> This is Labs page </h1>

            <button onClick={clickHandler}> Move to about page</button>

        </div>

        </div>

      

     
    )
}

export default Labs