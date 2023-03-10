import { useState } from "react";
function Input({setTodos}){

   const [input, SetInput] = useState('');
  
   const handleChange = (e) =>  SetInput(e.target.value);
   const handleSubmit = (e) => {
    setTodos((prev) => [...prev, {id: Math.floor(Math.random() * 100), name:input, completed:false}]);
   }
    
    return(
        <>
        <div>
        <label>Please add a todo</label>
        </div>
        <div>
        <input onChange={handleChange} type="text" />
        </div>
        <button onClick={handleSubmit}>Add</button>
        </>
    )
}

export default Input;

//yeni id türetme npm i nanoid !!!