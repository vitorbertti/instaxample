import React, { useState } from 'react';

import api from '../../services/api';
import './styles.css';

function Login({ history }) {
   const [message, setMessage] = useState('');
   const [user, setUser] = useState('');
   const [pass, setPass] = useState('');

   async function handleSubmit(e) {
      e.preventDefault();

      const response = await api.get('/users', {
         headers: { username: user.value, password: pass.value },
      });

      if (response.data != null) {
         const { _id } = response.data;
         history.push(`/timeline/${_id}`);
      } else {
         setMessage('User does not found');
      }
   }

   return (
      <div className="login-box">
         <h1 className="header-logo">Instaxample</h1>
         <span className="header-logo-message">{message}</span>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               ref={(input) => {
                  setUser(input);
               }}
            />
            <input
               type="password"
               ref={(input) => {
                  setPass(input);
               }}
            />
            <input type="submit" value="Sign up" />
         </form>
      </div>
   );
}

export default Login;
