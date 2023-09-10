import React from 'react';

function GalleryItemData({ item }) {
  
  const paragraphs = item.data
    .split('<br /><br />')
    .map((paragraph, index) => (
      <p
        className='pt-2'
        key={index}
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    ));

  return (
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
              <span>Production Time: {item.pageData.productionTime}</span>
            </div>
            <div>
              <span>Price: {item.pageData.price}</span>
            </div>
          </div>
          <div className='mt-4'>
            <p className=''>
              <div>{paragraphs}</div>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default GalleryItemData;
