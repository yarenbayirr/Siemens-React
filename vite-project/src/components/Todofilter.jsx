function Filter({todos}){

    const newTodos = todos.filter((todo) => todo.isCompleted === false);

    return(
        <>
        <h2>Number of todos: {newTodos.length}</h2>
        </>
    )
}

export default Filter;