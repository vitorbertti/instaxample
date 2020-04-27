import React from 'react';
import './styles.css';

function PhotoHeader(props) {
   console.log(props);
   return (
      <header className="photo-header">
         <figure className="photo-user">
            <img src={props.photo.photo.photo_url} alt="User Photo" />
            <figcaption className="photo-user">
               <a href="#">Test</a>
            </figcaption>
         </figure>
         <time className="photo-date">01/01/2020 01:01</time>
      </header>
   );
}

function PhotoInfo(props) {
   return (
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
               {props.photo.photo.comment}
            </li>
         </ul>
      </div>
   );
}

function PhotoUpdate() {
   return (
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
   );
}

function Photo(props) {
   return (
      <div className="photo">
         <PhotoHeader photo={props} />

         <img src={props.photo.photo_url} alt="Photo" className="photo-src" />

         <PhotoInfo photo={props} />
         <PhotoUpdate />
      </div>
   );
}

export default Photo;
