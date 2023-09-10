import React from 'react';

function SaleItemInfo({ item }) {
  const paragraphs = item.desc
    .split('<br /><br />')
    .map((paragraph, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    ));
  return (
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
  );
}

export default SaleItemInfo;
