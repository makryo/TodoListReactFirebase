import React, {useEffect, useState} from 'react'
import Form from '../todoList/Form';
import Todo from '../todoList/Todo';


function Main(){

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        //console.log(...todos);
    };
        
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))); 
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    let nom = localStorage.getItem("usersName").replace(/"/g, "");
    return (
        <>
            <br></br>
            <br></br>
            <h1>Hola {nom} cuales son tus tareas para hoy</h1>
            <br></br>

            <Form onSubmit={addTodo} />
            <Todo 
                todos={todos}
                setTodos={setTodos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />

            <button className='todo-button-logout'>Logout</button>
        </>
    );
}

export default Main;
