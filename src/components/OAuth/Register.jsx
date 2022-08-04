import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import Login from './Login';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !pass) {
            setFlag(true);
        }

        else{
            setFlag(false);

            localStorage.setItem("usersName", JSON.stringify(name));
            localStorage.setItem("usersEmail", JSON.stringify(email));
            localStorage.setItem("usersPassword", JSON.stringify(pass));

            setLogin(!login);
        }
    }

    function handleClick(){
        setLogin(!login);
    }

    return (
        <>
            <div className='container'>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Registrate</h3>

              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ingresa tu nombre"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="ingresa tu correo"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingresa una contraseña"
                  onChange={(event) => setPass(event.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Registrar
              </button>

              <p onClick={handleClick} className="forgot-password text-right">
                Ya te has registrado{" "} Inicie sesion?
                
              </p>

              {flag && (
                <Alert color="primary" variant="danger">
                  Esto es una alerta de prueba
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div> 
        </>
      );
}


  


export default Register