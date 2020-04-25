import React from 'react';
import './styles.css';

function Timeline() {
   return (
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

            <img src="" alt="Photo" className="photo-src" />

            <div className="photo-info">
               <div className="photo-info-likes">
                  <a href="#">test_ssa </a>
                  <a href="#">test_aaaa </a>
                  Liked
               </div>

               <p className="photo-info-caption">
                  <a className="photo-info-author">author </a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>

               <ul className="photo-info-comments">
                  <li className="comments">
                     <a className="photo-info-author">follower </a>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li className="comments">
                     <a className="photo-info-author">follower </a>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li className="comments">
                     <a className="photo-info-author">follower </a>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
   );
}

export default Timeline;
