import { useState } from "react";
function List({todos}){

   const [isCompleted, SetCompleted] = useState(false);
   const handleChange = (e) => {SetCompleted(!isCompleted)};
   
   
    return(
        <>
        {todos.map((todo) => (
            <li key={todo.id}><input type="checkbox" onChange={handleChange}/>{todo.name}</li>
        ))}
        
        </>
    )
}

export default List;