import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

function PhotoHeader(props) {
   return (
      <header className="photo-header">
         <figure className="photo-user">
            <img src={props.photo.profile_url} alt="User Photo" />
            <figcaption className="photo-user">
               <Link to={`/timeline/${props.photo.user}`}>
                  {props.photo.username}
               </Link>
            </figcaption>
         </figure>
         <time className="photo-date">{props.photo.date}</time>
      </header>
   );
}

function PhotoInfo(props) {
   return (
      <div className="photo-info">
         <div className="photo-info-likes">
            {props.photo.like.map((like) => {
               return (
                  <Link key={like.id} to={`/timeline/${like.user}`}>
                     {like.username}{' '}
                  </Link>
               );
            })}
            Liked
         </div>

         <p className="photo-info-caption">
            <Link
               to={`/timeline/${props.photo.user}`}
               className="photo-info-author"
            >
               {props.photo.username}{' '}
            </Link>
            {props.photo.description}
         </p>

         <ul className="photo-info-comments">
            {props.photo.comment.map((comment) => {
               return (
                  <li key={comment.id} className="comments">
                     <Link
                        to={`/timeline/${comment.user}`}
                        className="photo-info-author"
                     >
                        {comment.username}{' '}
                     </Link>
                     {comment.text}
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

function PhotoUpdate(props) {
   const [liked, setLiked] = useState(props.photo.liked);
   function setLike(e) {
      e.preventDefault();
      api.post('/likes', {
         headers: {
            photo_id: props.photo._id,
            user_id: props.photo.user,
         },
      }).then((response) => {
         setLiked(!liked);
      });
   }

   return (
      <section className="photo-update">
         <a
            onClick={setLike}
            className={liked ? 'photo-update-like-active' : 'photo-update-like'}
         >
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
         <PhotoHeader photo={props.photo} />

         <img src={props.photo.photo_url} alt="Photo" className="photo-src" />

         <PhotoInfo photo={props.photo} />
         <PhotoUpdate photo={props.photo} />
      </div>
   );
}

export default Photo;
