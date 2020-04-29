import React from 'react';
import './styles.css';

function Login() {
   return (
      <div className="login-box">
         <h1 className="header-logo">Instaxample</h1>
         <form action="">
            <input type="text" />
            <input type="password" />
            <input type="submit" value="Sign up" />
         </form>
      </div>
   );
}

export default Login;
