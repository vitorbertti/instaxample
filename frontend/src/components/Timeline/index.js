import React, { useEffect, useState } from 'react';

import Photo from '../Photo';
import './styles.css';
import api from '../../services/api';

function Timeline() {
   const [photos, setPhotos] = useState({});

   useEffect(() => {
      api.get('user')
         .then((response) => response.json())
         .then((photos) => setPhotos(photos));
   }, []);

   return (
      <div className="photos-container">
         {photos.map((photo) => (
            <Photo photo={photo} />
         ))}
         <Photo />
      </div>
   );
}

export default Timeline;
