import React, { useState, useEffect, useRef } from 'react';
import Todo from './Todo';


const Form = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const [id, setId] = useState(0);
    const increId=()=>{
        setId(id + 1)
        return id;
    }
    
    //const valid = JSON.parse(localStorage.getItem('todos'));
    //console.log(valid[props.edit.id]);

    const [idUp, setIdUp] = useState(10);
    const updateId=()=>{
        setIdUp(idUp +1)
        return idUp;
        console.log(idUp);
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: increId(),
            text: input
        });
        setInput('');
    };

    const handleSubmitUpdate = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: updateId(),
            text: input
        });
        setInput('');
    };


  return (
    <form onSubmit={handleSubmitUpdate} className='todo-form'>
        {props.edit ? (
            <>
                <input
                    placeholder='actualiza tu tarea'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit'
                    required
                />
                <button onClick={handleSubmitUpdate} className='todo-button edit'>Actualizar</button>
            </>
        ):(
            <>
                <input
                    placeholder='agrega una tarea'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input'
                    ref={inputRef}
                    required
                />
                <button onClick={handleSubmit} className='todo-button'>Agregar</button>
            </>
        )}
    </form>
  );
}

export default Form;
