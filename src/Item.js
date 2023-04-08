import product_01 from './Images/product_01.jpg';
import product_02 from './Images/product_02.jpg';
import product_03 from './Images/product_03.jpg';
import product_04 from './Images/product_04.jpg';
import product_05 from './Images/product_05.jpg';
import product_06 from './Images/product_06.jpg';
import './App.css';
import Nav from "./components/Nav";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';





function Item(){
    const { product } = useParams();
    const [cartButton, setCartButton] = useState(true);
    const products =[
      {
          img: product_01,
          title: 'Tittle 01',
          price: '$ 4.50',
          slug: 'title-01',
          description: 'lorem ipsum dolor sit amet, con, sed diam nonumy, sed diam nonumy, sed diam nonumy at vero eos et accusam et justo const  Lorem ipsum dolor sit amet, con, sed diam non'
      },
      {
          img: product_02,
          title: 'Tittle 02',
          price: '$ 3.75',
          slug: 'title-02',
          description: 'lorem ipsum dolor sit amet, con, sed diam nonumy, sed diam nonumy, sed diam nonumy at vero eos et accusam et justo const  Lorem ipsum dolor sit amet, con, sed diam non'
      },
      {
          img: product_03,
          title: 'Tittle 03',
          price: '$ 6.00',
          slug: 'title-03',
          description: 'lorem ipsum dolor sit amet, con, sed diam nonumy, sed diam nonumy, sed diam nonumy at vero eos et accusam et justo const  Lorem ipsum dolor sit amet, con, sed diam non'
      },
      {
          img: product_04,
          title: 'Tittle 04',
          price: '$ 1.25',
          slug: 'title-04',
          description: 'lorem ipsum dolor sit amet, con, sed diam nonumy, sed diam nonumy, sed diam nonumy at vero eos et accusam et justo const  Lorem ipsum dolor sit amet, con, sed diam non'
      },
      {
          img: product_05,
          title: 'Tittle 05',
          price: '$ 2.75',
          slug: 'title-05',
          description: 'lorem ipsum dolor sit amet, con, sed diam nonumy, sed diam nonumy, sed diam nonumy at vero eos et accusam et justo const  Lorem ipsum dolor sit amet, con, sed diam non'
      },
      {
          img: product_06,
          title: 'Tittle 06',
          price: '$ 2.00',
          slug: 'title-06',
          description: 'lorem ipsum dolor sit amet, con, sed diam nonumy, sed diam nonumy, sed diam nonumy at vero eos et accusam et justo const  Lorem ipsum dolor sit amet, con, sed diam non'
      }
    ]

    const productItem = products.filter(el => el.slug === product)[0]

    useEffect(() => {
      if(sessionStorage.getItem(product)){
        setCartButton(false)
      }
    },[product]);

    function addToCart(product){
      if (!sessionStorage.getItem(product.slug)){
        sessionStorage.setItem(product.slug, JSON.stringify(product));
        setCartButton(false)
      }
    }
    function removeToCart(product){
      if (sessionStorage.getItem(product.slug)){
        sessionStorage.removeItem(product.slug);
        setCartButton(true)
      }
    }
    return(
        <>
            <Nav />
            <div className="product-show">
              <div className="main-banner product-banner">
                <div className="text-wrapper">
                  <h1 className="title text-focus-in">{productItem?.title}</h1>
                </div>
              </div>

              <div className="product-contnet">
                <div className="container-lg">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                      <img className='show-image' src={productItem?.img} alt='product'/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <div className="product-info">
                        <div className="info-section front-info">
                          <h4>Price</h4>
                          <div>{productItem?.price}</div>
                        </div>
                        <div className="info-section front-info">
                          <h4>Description</h4>
                          <div>{productItem?.description}</div>
                        </div>
                        <div className="info-section front-info">
                          {cartButton ?
                            <button onClick={() => addToCart(productItem)} className='btn btn-primary'>Add to cart</button>
                            :
                            <button onClick={() => removeToCart(productItem)} className='btn btn-danger'>Remove From cart</button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}


export default Item;