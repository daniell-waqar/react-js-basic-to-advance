
import React from "react"


import { useNavigate } from "react-router-dom";
function About () {

    //  To naviage b/w different pages
    const navigate = useNavigate();   

    function clickHandler (){

        navigate("/support")
    }
    
    function GoBack (){
        navigate(-1) 
    }
    return (

        <div>

        <div>

            <h1> This is About page </h1>
            <button onClick={clickHandler}> Move to support page</button>
            <button onClick={GoBack}> Go back</button>

        </div>
        </div>

      

     
    )
}

export default About