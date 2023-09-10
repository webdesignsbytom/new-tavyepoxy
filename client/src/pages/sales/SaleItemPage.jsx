import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
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

  const paragraphs = item.desc
    .split('<br /><br />')
    .map((paragraph, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    ));

  return (
    <div className='grid bg-gray-100 lg:h-screen grid-rows-reg lg:overflow-hidden lg:max-h-screen'>
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
            <section className='shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] rounded-xl outline outline-1 outline-black'>
              <article className='p-4'>
                <div className='mb-4 text-center'>
                  <h2 className='text-xl'>{item.pageData.subtitle}</h2>
                </div>
                <div>
                  <div className='mb-2 text-center'>
                    <h3 className='underline'>Design information</h3>
                  </div>
                  <div>
                    <div>
                      <span>Timber: {item.pageData.timber}</span>
                    </div>
                    <div>
                      <span>Undercoat: {item.pageData.undercoat}</span>
                    </div>
                    <div>
                      <span>Dimensions: {item.pageData.dimensions}</span>
                    </div>
                    <div>
                      <span>Height: {item.pageData.height}</span>
                    </div>
                    <div>
                      <span>Legs: {item.pageData.legs}</span>
                    </div>
                    <div>
                      <span>Price: £{item.price}</span>
                    </div>
                    <div>
                      <span>Shipping: £{item.shipping}</span>
                    </div>
                    <div className='mt-4'>
                      <p className=''>
                        <div>{paragraphs}</div>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            {/* Right */}
            <section className='grid grid-rows-rev lg:overflow-hidden shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] p-4 rounded-xl outline outline-1 outline-black'>
              {/* Images */}
              {displayVideo ? (
                <article className='grid outline outline-black outline-2 overflow-hidden rounded'>
                  <div className='video-container'>
                    <video id={'index'} className='video-player' controls muted>
                      <source src={item.pageData.videoLinks} type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </article>
              ) : (
                <div className='outline outline-black outline-2 lg:overflow-hidden'>
                  <img
                    className='lg:overflow-hidden h-full object-fill w-full'
                    src={item.pageData.images[imagesNum]}
                    alt='design'
                  />
                </div>
              )}

              {/* Buttons */}
              <section className='grid grid-flow-col gap-4 my-4 px-2 text-xl mb-2'>
                <div>
                  <button
                    onClick={selectPrevImg}
                    className='outline outline-2 outline-black rounded-xl py-2 w-full px-4 active:scale-95 no__highlights white__marble__bg font-bold hover:opacity-70'
                  >
                    Prev Image
                  </button>
                </div>
                <div>
                  <button
                    onClick={selectVideo}
                    className='outline outline-2 outline-black rounded-xl py-2 w-full px-4 active:scale-95 no__highlights pink__marble__bg font-bold text-black hover:opacity-70'
                  >
                    See Video
                  </button>
                </div>
                <div>
                  <button
                    onClick={selectNextImg}
                    className='outline outline-2 outline-black rounded-xl py-2 w-full px-4 active:scale-95 no__highlights black__marble__bg font-bold text-white hover:opacity-70'
                  >
                    Next Image
                  </button>
                </div>
              </section>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SaleItemPage;
