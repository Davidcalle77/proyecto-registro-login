import React, { useState } from 'react';
import "../src/App.css";


const AuthService = {
login: (username, password) => {
    {/* Autenticación, de solicitud al servidor
    para verificar las credenciales del usuario.*/}
    // Si la autenticación fue exitosa, mostrar un mensaje ingreso éxito.
    // En caso contrario, Usuario y/o Contraseña Errada .
    return new Promise((resolve, reject) => {
    // en esta parte se prueba el servicio de autenticación exitosa o con error
    if (username === 'juan' && password === 'sena2023') {
        resolve('Ingreso Exitoso');
    } else {
        reject('Usuario y/o Contraseña Errada');
    }
    });
},
};

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');

const handleLogin = () => {
    AuthService.login(username, password)
    .then((response) => {
        setMessage(response);
    })
    .catch((error) => {
        setMessage(error);
    });
};

return (
    <div className='titulo'>
    <h1>Registro e Inicio de Sesión</h1>
        <p>El servicio recibirá un usuario y una contraseña,<br/> si la autenticación es correcta saldrá un mensaje de autenticación satisfactoria <br/>en caso contrario debe devolver error en la autenticación.</p>
    <br/>
    {/*se ingreso logo de la empresa en la cabecera de la pagina*/}
    <div>
        <img src={require("./imagenes/logo.png")}/>
    </div><br/>
    <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    /><br/><br/>
    <button onClick={handleLogin}>Iniciar sesión</button>
    <p>{message}</p>
    </div>
);
};

export default Login;



