
import './NewProduct.css'

import ProductForm from './ProductForm';

function NewProduct (props) {

    function PHandler (prod) 
    {
        console.log("I am inside new product")
        console.log(prod);
        // calling parent function
        props.OnApps(prod)
    }
    return (

    <div>
        <ProductForm OnProductForm = {PHandler}></ProductForm>
    </div>

    );
}


export default NewProduct;