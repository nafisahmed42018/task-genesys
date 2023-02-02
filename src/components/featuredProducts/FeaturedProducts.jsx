import React from 'react';
import './featuredproducts.css';
import { featuredProducts } from './featuredproducts';
const FeaturedProducts = () => {
  return (
    <div className='featured__container'>
      <div className='title'>
        <h2 className='title__intro'>whats new</h2>
        <h1>SHOP THE LATEST</h1>
        <p className='info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          tempore eveniet cumque animi, obcaecati eligendi repudiandae quidem
          eum libero ipsum dolores debitis voluptates consectetur temporibus ex
          est magni non voluptatum!
        </p>
      </div>
      <div className='product__gallery'>
        <div className='slider__buttons'>
          <button>
            <i className='bx bx-chevron-left'></i>
          </button>
          <button>
            <i className='bx bx-chevron-right'></i>
          </button>
        </div>
        <div className='product__list'>
          {featuredProducts.map(item => (
            <div className='product__item' key={item.id}>
              <img src={item.image} alt={item.name} />
              <p className='product__name'>{item.name}</p>
              <span>
                {item.discountPrice === null ? (
                  <p className='normal__price'>{`$${item.price}`}</p>
                ) : (
                  <p className='price'>
                    <span className='previous__price'>{`$${item.price}`}</span>
                    <span className='discounted__price'>{` $${item.discountPrice}`}</span>
                    {/* {`$${item.price} $${item.discountPrice}`} */}
                  </p>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className='view__products-btn'>VIEW ALL PRODUCTS</button>
    </div>
  );
};

export default FeaturedProducts;
