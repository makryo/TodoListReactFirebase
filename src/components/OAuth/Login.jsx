import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Main from '../Main/Main';

function Login() {

    const [emaillog, setEmaillog] = useState("");
    const [passlog, setPasslog] = useState("");

    const [flag, setFlag] = useState(false);
    const [main, setMain] = useState(true);

    function handleLogin(e){
        e.preventDefault();
        
        let contra = localStorage.getItem("usersPassword").replace(/"/g, "");
        let mail = localStorage.getItem("usersEmail").replace(/"/g, "");

        if (!emaillog || !passlog) {
            
            setFlag(true);
            console.log("esta en el if");
            
        }
        else if (passlog !== contra || emaillog !== mail) {
            setFlag(true);
            console.log("esta en el if else");
        }

        else{
            setMain(!main);
            setFlag(false);
            console.log("esta en el else");
            console.log(contra);
        }
    }
    
  return (
    <div className='container'>
      {main ? (

        <form onSubmit={handleLogin}>
          <h3>Iniciar sesion</h3>

          <div className="form-group">
            <label>Correo</label>
            <input
              type="email"
              className="form-control"
              placeholder="ingresa el correo"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="ingresa la contraseña"
              onChange={(event) => setPasslog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Iniciar sesion
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Informacion no valida o el usuario y la contraseña no coinciden
            </Alert>
          )}
        </form>
      ) : (
        <Main />
      )}
    </div>
  )
}

export default Login
