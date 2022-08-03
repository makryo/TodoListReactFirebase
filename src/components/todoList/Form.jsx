import React, { useState, useEffect, useRef } from 'react';


const Form = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const [id, setId] = useState(0);
    const increId=()=>{
        setId(id + 1)
        return id;
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: increId(),
            text: input
        });
        setInput('');
    };


  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
            <>
                <input
                    placeholder='actualiza tu tarea'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit'
                />
                <button onClick={handleSubmit} className='todo-button edit'>Actualizar</button>
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
                />
                <button onClick={handleSubmit} className='todo-button'>Agregar</button>
            </>
        )}
    </form>
  );
}

export default Form;
