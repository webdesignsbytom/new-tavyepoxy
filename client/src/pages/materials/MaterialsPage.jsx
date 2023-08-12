import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Images
import MaterialsImage1 from '../../assets/images/materials/materials1.jpg';
import TableLegsImage from '../../assets/images/legs/leg3.jpg';
import StyleImage from '../../assets/images/epoxy/4x.png';
import FooterComponent from '../../components/footer/FooterComponent';
import { useNavigate } from 'react-router-dom';
import CtaMaterialsLinks from '../../components/materials/CtaMaterialsLinks';

function MaterialsPage() {
  const { setActiveNav } = useContext(ToggleContext);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/materials');
  }, []);

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    navigate(`${id}`);
  };

  return (
    <div className='grid bg-gray-100 min-h-screen grid-rows-reg'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full'>
        <div className='grid w-full px-4 lg:px-0 lg:w-1/2 mx-auto'>
          <section>
            <article className='mt-8'>
              <div className='pb-6 border-b-2 border-solid border-black'>
                <h2 className='text-2xl font-corgs font-medium'>Materials</h2>
                <h3 className='italic text-xl'>Customise your dream piece</h3>
              </div>
              <div className='grid grid-cols-2 gap-8 mt-6'>
                <section>
                  <div className='mb-2'>
                    <p>
                      Any materials you like can be sourced. Any wood, wood
                      finish or epoxy style and colours. Can be mixed and
                      matched to create a product to fit your space perfectly.
                      The sky is the limit depending on your budget.
                    </p>
                  </div>
                  <div>
                    <img
                      src='https://i.etsystatic.com/23288597/r/il/c1bf48/3759699193/il_fullxfull.3759699193_ae3d.jpg'
                      alt='materials'
                    />
                  </div>
                  <div className='my-2'>
                    <p>
                      Pick from a large collection of pre-made styles. We cant
                      recreate them exactly. Thats the beauty of purely unique
                      furniture. However you can find a style you like and
                      change the colours and suggest flow directions for the
                      patterns. You can choose from splashes, striations, wavey,
                      spirical and what ever you can think of.
                    </p>
                  </div>
                  <div className='my-2'>
                    <img src={StyleImage} alt='styles' />
                  </div>
                </section>
                <section>
                  <div className='mb-2'>
                    <p>
                      Hundreds of colours and paint styles available. Including
                      metallics, glow in the dark, translucent. Any colour can
                      be ordered in if we don't have it in stock.
                    </p>
                  </div>
                  <div>
                    <img src={MaterialsImage1} alt='materials' />
                  </div>
                  <div className='mt-2'>
                    <p>
                      All base products are made with MDF to keep the products
                      affordable to everyone. We source commonly fitted metal
                      table legs or custom make wooden legs.
                    </p>
                  </div>
                  <div className='my-2'>
                    <img src={TableLegsImage} alt='legs' />
                  </div>
                  <div>
                    <p>
                      You can also choose the style of table you want. We can
                      customise the size and shape easily. But also bring you
                      options such as angled or rounded edges, trim, inlays,
                      basically anything.
                    </p>
                  </div>
                </section>
              </div>
            </article>
          </section>
          <section className='grid w-full mt-6 mb-4'>
            <div className='grid w-full'>
              <div className='text-center'>
                <h4 className='text-xl font-semibold'>Contact Me Now</h4>
              </div>
              <CtaMaterialsLinks navigateToPage={navigateToPage} />
              <div className='text-center mt-4'>
                <p className=''>
                  Feel free to discuss anything you need to with me. Happy to
                  help and to find a way to bring your project to life.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default MaterialsPage;
