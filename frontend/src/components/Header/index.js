import React from 'react';
import './styles.css';

function Header() {
   return (
      <header className="header-container">
         <h1>Instaxample</h1>

         <form className="header-search">
            <input
               type="text"
               name="search"
               placeholder="Search"
               className="header-search-input"
            />
            <input
               type="submit"
               value="Search"
               className="header-search-submit"
            />
         </form>

         <nav>
            <ul className="header-nav">
               <li className="header-nav-item">
                  <a href="#">♡</a>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
