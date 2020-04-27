import React, { useEffect, useState } from 'react';

import Photo from '../Photo';
import './styles.css';
import api from '../../services/api';

function Timeline() {
   const [photos, setPhotos] = useState([]);

   useEffect(() => {
      async function loadPhotos() {
         const response = await api.get('/photos');

         setPhotos(response.data);
      }

      loadPhotos();
   }, []);

   return (
      <div className="photos-container">
         {photos.map((photo, key) => (
            <Photo key={key} photo={photo} />
         ))}
      </div>
   );
}

export default Timeline;
