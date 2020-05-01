import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Photo from '../Photo';
import './styles.css';
import api from '../../services/api';

function Timeline() {
   const [photos, setPhotos] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      async function loadPhotos() {
         const response = await api.get('/photos', {
            headers: {
               user_id: id,
            },
         });
         setPhotos(response.data);
      }

      loadPhotos();
   }, []);

   return (
      <div className="photos-container">
         {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
         ))}
      </div>
   );
}

export default Timeline;
