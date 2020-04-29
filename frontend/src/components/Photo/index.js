import React from 'react';
import './styles.css';

function PhotoHeader(props) {
   return (
      <header className="photo-header">
         <figure className="photo-user">
            <img src={props.photo.profile_url} alt="User Photo" />
            <figcaption className="photo-user">
               <a href="#">{props.photo.username}</a>
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
            <a className="photo-info-author">{props.photo.username} </a>
            {props.photo.description}
         </p>

         <ul className="photo-info-comments">
            {props.photo.comment.map((comment) => {
               return (
                  <li className="comments">
                     <a className="photo-info-author">{comment.username} </a>
                     {comment.text}
                  </li>
               );
            })}
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
   console.log(props);
   return (
      <div className="photo">
         <PhotoHeader photo={props.photo} />

         <img src={props.photo.photo_url} alt="Photo" className="photo-src" />

         <PhotoInfo photo={props.photo} />
         <PhotoUpdate photo={props.photo} />
      </div>
   );
}

export default Photo;
