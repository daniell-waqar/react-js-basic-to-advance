
import logo from "../assets/Logo.svg"

function Navbar (){

    return (

        <div>

            <Link to="/">

                <img src= {logo} alt="Logo" width={160} height={32} loading="lazy" />
                
            </Link>

        </div>
    )


}