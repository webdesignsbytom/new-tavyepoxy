import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import GalleryItemData from '../../components/gallery/GalleryItemData';
import GalleryImageContainer from '../../components/gallery/GalleryImageContainer';
import GalleryImageCarousel from '../../components/gallery/GalleryImageCarousel';
import FullSizeImageContainer from '../../components/gallery/FullSizeImageContainer';

function GalleryItemPage() {
  const { setActiveNav } = useContext(ToggleContext);
  const location = useLocation();
  const item = location.state;

  const [images, setImages] = useState([]);
  const [imagesNum, setImagesNum] = useState(0);
  const [displayVideo, setDisplayVideo] = useState(false);
  const [fullscreenDisplay, setFullscreenDisplay] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setImages(item.pageData.images);
  }, []);

  const selectNextImg = () => {
    setDisplayVideo(false);

    if (imagesNum === images.length - 1) {
      setImagesNum(0);
    } else {
      setImagesNum((imagesNum) => imagesNum + 1);
    }
  };

  const selectPrevImg = () => {
    setDisplayVideo(false);

    if (imagesNum === 0) {
      setImagesNum(images.length - 1);
    } else {
      setImagesNum((imagesNum) => imagesNum - 1);
    }
  };

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    navigate(`${id}`);
  };

  const selectVideo = () => {
    setDisplayVideo(true);
  };

  const openFullscreenDisplay = () => {
    setFullscreenDisplay(true);
  };

  const closeFullscreenDisplay = () => {
    setFullscreenDisplay(false);
  };

  return (
    <div className='grid bg-gray-100 grid-rows-reg'>
      <Navbar />
      {/* Main */}
      <main className='relative grid grid-rows-rev h-full mb-2 lg:overflow-hidden'>
        {fullscreenDisplay && (
          <FullSizeImageContainer closeFullscreenDisplay={closeFullscreenDisplay} />
        )}
        <div className='grid w-full lg:w-3/4 mx-auto grid-rows-reg lg:overflow-hidden px-2'>
          <section className='my-4'>
            <div className='text-center border-b-2 border-black border-solid pb-2 mx-4'>
              <h1 className='text-2xl font-corgs'>{item.name}</h1>
            </div>
          </section>
          <section className='grid w-full lg:grid-cols-2 gap-4 mb-2 lg:overflow-hidden p-1'>
            {/* Left */}
            <GalleryItemData item={item} />
            {/* Right */}
            <GalleryImageContainer
              item={item}
              openFullscreenDisplay={openFullscreenDisplay}
              selectVideo={selectVideo}
              selectPrevImg={selectPrevImg}
              imagesNum={imagesNum}
              displayVideo={displayVideo}
              selectNextImg={selectNextImg}
            />
          </section>
        </div>

        {/* Gallery items */}
        <GalleryImageCarousel images={images} />
      </main>
    </div>
  );
}

export default GalleryItemPage;
