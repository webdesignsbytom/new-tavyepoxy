import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import SaleItemInfo from '../../components/sales/SaleItemInfo';
import SalesItemImages from '../../components/sales/SalesItemImages';
import FullSizeImageContainer from '../../components/gallery/FullSizeImageContainer';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Images
import SaleImage from '../../assets/images/sales/onsale.png';

function SaleItemPage() {
  const { setActiveNav } = useContext(ToggleContext);
  const location = useLocation();
  const item = location.state;

  const [images, setImages] = useState([]);
  const [imagesNum, setImagesNum] = useState(0);

  const [displayVideo, setDisplayVideo] = useState(false);
  const [fullscreenDisplay, setFullscreenDisplay] = useState(false);

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
    <div className='grid bg-gray-100 grid-rows-reg '>
      {fullscreenDisplay && (
        <FullSizeImageContainer
          closeFullscreenDisplay={closeFullscreenDisplay}
          item={item}
          imagesNum={imagesNum}
          selectPrevImg={selectPrevImg}
          selectNextImg={selectNextImg}
        />
      )}
      <Navbar />
      {/* Main */}
      <main className='grid h-full mb-2 lg:overflow-hidden px-2'>
        <div className='grid w-full lg:w-3/4 mx-auto grid-rows-reg lg:overflow-hidden'>
          <section className='my-4'>
            <div className='text-center border-b-2 border-black border-solid pb-2 mx-4'>
              <h1 className='text-2xl font-corgs'>{item.name}</h1>
            </div>
          </section>
          <section className='grid w-full lg:grid-cols-2 gap-4 mb-2 lg:overflow-hidden p-1 relative'>
            {item.onSale && (
              <div className='absolute top-0 left-0'>
                <img src={SaleImage} alt='Sale' className='w-[120px]' />
              </div>
            )}
            {/* Left */}
            <SaleItemInfo item={item} />
            {/* Right */}
            <SalesItemImages
              displayVideo={displayVideo}
              imagesNum={imagesNum}
              item={item}
              openFullscreenDisplay={openFullscreenDisplay}
              selectNextImg={selectNextImg}
              selectVideo={selectVideo}
              selectPrevImg={selectPrevImg}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default SaleItemPage;
