import React from 'react';
import { useLocation } from 'react-router-dom';

function GalleryItemPage() {
  const location = useLocation();
  const item = location.state;
  return (
    <div>
      GalleryItemPage
      <div>{item.name}</div>
    </div>
  );
}

export default GalleryItemPage;
