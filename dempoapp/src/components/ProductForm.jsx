

import { useState } from 'react';
import './ProductForm.css';

function ProductForm (props) {

    const [newTitle , SetTitle] = useState('');
    const [newDate, SetDate] = useState('');

    function titleChangeHandler (event){

        SetTitle(event.target.value);
        // console.log(event.target.value);        write something on input field and will see on console
    }

    function dateChangeHandler (event){

        SetDate(event.target.value);
        // console.log(event.target.value);     
    }

    function submitHandler (event){
        event.preventDefault();     // avoiding form Default action (no action when click on button) and creating our own object
                                 // then displaying object

        const prodDate = {
            title: newTitle,
            date: newDate
        }

        // console.log(prodDate);


        // uplifting concept

        props.OnProductForm(prodDate)
        SetTitle('');
        SetDate('');
        
    }

    return (

        <form onSubmit={submitHandler}>

            <div>

                <label>Title </label>

                <input type="text" value={newTitle} onChange={titleChangeHandler }></input>
                     {/* value={newTitle} this will link the title to control functions so that it can make the box empty */}


            </div>

            <div>

                <label> Date </label>
                
                <input type='date' min='2024-04-20' max='2024-05-20' value={newDate} onChange={dateChangeHandler }></input>

            </div>

            <div>
                <button type='submit'> Add Product </button>
            </div>


        </form>
    )
}

export default ProductForm;