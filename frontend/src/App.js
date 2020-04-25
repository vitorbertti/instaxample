import React from 'react';
import './App.css';

function App() {
   return (
      <div className="App">
         <div className="main">
            <header className="header container">
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

            <div className="photos-container">
               <div className="photo">
                  <header className="photo-header">
                     <figure className="photo-user">
                        <img src="" alt="User Photo" />
                        <figcaption className="photo-user">
                           <a href="#">Test</a>
                        </figcaption>
                     </figure>
                     <time className="photo-date">01/01/2020 01:01</time>
                  </header>

                  <img src="" alt="" className="photo-src" />

                  <div className="photo-info">
                     <div className="photo-info-likes">
                        <a href="#">test_ssa</a>
                        <a href="#">test_aaaa</a>
                        Liked
                     </div>

                     <p className="photo-info-caption">
                        <a className="photo-info-author">author</a>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     </p>

                     <ul className="photo-info-comments">
                        <li className="comments">
                           <a className="photo-info-author">follower</a>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit.
                        </li>
                        <li className="comments">
                           <a className="photo-info-author">follower</a>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit.
                        </li>
                        <li className="comments">
                           <a className="photo-info-author">follower</a>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit.
                        </li>
                     </ul>
                  </div>

                  <section className="photo-update">
                     <a href="" className="photo-update-like">
                        Like
                     </a>
                     <form action="" className="photo-update-form">
                        <input
                           type="text"
                           placeholder="Comment"
                           className="photo-update-form-input"
                        />
                        <input
                           type="submit"
                           value="Send"
                           className="photo-update-form-submit"
                        />
                     </form>
                  </section>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
