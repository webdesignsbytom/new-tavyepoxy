import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import { ToggleContext } from '../../context/ToggleContext';

function GalleryItemPage() {
  const { setActiveNav } = useContext(ToggleContext);
  const location = useLocation();
  const item = location.state;

  const [images, setImages] = useState([]);
  const [imagesNum, setImagesNum] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    console.log('item.pageData.images', item.pageData.images);
    setImages(item.pageData.images);
  }, []);

  const selectNextImg = () => {
    if (imagesNum === images.length - 1) {
      setImagesNum(0);
    } else {
      setImagesNum((imagesNum) => imagesNum + 1);
    }
  };

  const selectPrevImg = () => {
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

  console.log('images', images);
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
          <section className='grid w-full lg:grid-cols-2 gap-4 mb-2 lg:overflow-hidden p-1'>
            {/* Left */}
            <section className='shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] rounded-xl outline outline-1 outline-black'>
              <article className='p-4'>
                <div className='mb-4 '>
                  <h2 className='text-xl'>{item.pageData.subtitle}</h2>
                </div>
                <div>
                  <div className='mb-2'>
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
                      <span>Colours used: {item.colours}</span>
                    </div>
                    <div>
                      <span>Dimensions: {item.pageData.dimensions}</span>
                    </div>
                    <div>
                      <span>Legs: {item.pageData.legs}</span>
                    </div>
                    <div>
                      <span>
                        Production Time: {item.pageData.productionTime}
                      </span>
                    </div>
                    <div>
                      <span>Price: {item.pageData.price}</span>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <span>Data: {item.data}</span>
                  </div>
                </div>
              </article>
            </section>
            {/* Right */}
            <section className='grid grid-rows-rev lg:overflow-hidden shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] p-4 rounded-xl outline outline-1 outline-black'>
              <div className='outline outline-black outline-2 lg:overflow-hidden'>
                <img
                  className='lg:overflow-hidden h-full object-fill w-full'
                  src={item.pageData.images[imagesNum]}
                  alt='design'
                />
              </div>

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
        <section className='lg:hidden px-2'>
          <div>
            <button
              id='/gallery'
              onClick={navigateToPage}
              className='outline outline-2 w-full font-semibold text-xl outline-black rounded-xl py-2 px-4 white__marble__bg active:scale-95 no__highlights hover:opacity-70'
            >
              Gallery
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GalleryItemPage;
