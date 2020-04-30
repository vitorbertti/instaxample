import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';

function Login() {
   const [message, setMessage] = useState('');

   async function handleSubmit(e) {
      e.preventDefault();
      const response = await api.post('/login');
      if (response.ok) {
         return response.text();
      } else {
         setMessage('User does not found');
      }
   }

   return (
      <div className="login-box">
         <h1 className="header-logo">Instaxample</h1>
         <span>{message}</span>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               ref={(input) => {
                  const login = input;
               }}
            />
            <input
               type="password"
               ref={(input) => {
                  const password = input;
               }}
            />
            <input type="submit" value="Sign up" />
         </form>
      </div>
   );
}

export default Login;
