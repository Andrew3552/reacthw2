import { useState, useEffect } from 'react'
import { sendRequest } from './components/Helper/sendRequest'

import PropTypes from "prop-types";

import Header from './components/Header/Header'
import MainTitle from './components/Main/MainTitle/MainTitle'
import MainProduct from './components/Main/MainProduct/MainProduct'
import Footer from './components/Footer/Footer'

import './App.scss'


function App() {

  const [productArray, setProductArray] = useState([])
    useEffect(() => {
        sendRequest('/data.json')
            .then(({products}) => {
                setProductArray(products)
            })
    }, []);

    const [favorite, setFavorite] = useState(() => {
      const savedFavorite = localStorage.getItem('favorite');
      return savedFavorite ? JSON.parse(savedFavorite) : [];
    });

    const handleFavorite = (article) => {
      setFavorite((prevFavorite) => {
        const isArticleInFavorites = prevFavorite.some((fav) => fav === article);
    
        if (isArticleInFavorites) {
          const updatedFavorite = prevFavorite.filter((fav) => fav !== article);
          localStorage.setItem('favorite', JSON.stringify(updatedFavorite));
          return updatedFavorite;
        } else {
          const updatedFavorite = [...prevFavorite, article];
          localStorage.setItem('favorite', JSON.stringify(updatedFavorite));
          return updatedFavorite;
        }
      });
    };
    
    // function clearLocalStorage() {
    //   localStorage.clear();
    // }
    
    // // Вызов функции очистки localStorage
    // clearLocalStorage();

    const [addToCart, setAddToCart] = useState(() => {
      const savedAddToCart = localStorage.getItem('addToCart');
      return savedAddToCart ? JSON.parse(savedAddToCart) : [];
    });

    const handleAddToCart = (article) => {
      setAddToCart((prevAddToCart) => {
        if (prevAddToCart.includes(article)) {
          const updatedAddToCart = prevAddToCart.filter((fav) => fav !== article);
          localStorage.setItem('addToCart', JSON.stringify(updatedAddToCart));
          return updatedAddToCart;
        } else {
          const updatedAddToCart = [...prevAddToCart, article];
          localStorage.setItem('addToCart', JSON.stringify(updatedAddToCart));
          return updatedAddToCart;
        }
      });
    }

  return (
    <>
      <Header 
      favorite={favorite} 
      addToCart={addToCart}  
      />
      <MainTitle />
      <MainProduct 
        productArray={productArray}
        handleFavorite={handleFavorite}
        handleAddToCart={handleAddToCart}
        isCart={(product) => addToCart.some((fav) => fav.article === product.article)}
        isFavorite={(product) => favorite.some((fav) => fav.article === product.article)}
        />
      <Footer />
    </>
  )
}

App.propTypes = {
  productArray: PropTypes.array,
  handleFavorite: PropTypes.func,
  handleAddToCart: PropTypes.func,
  isCart: PropTypes.func,
  isFavorite: PropTypes.func,
  favorite: PropTypes.array,
  addToCart: PropTypes.array,
  setProductArray: PropTypes.func,
  setFavorite: PropTypes.func,
  setAddToCart: PropTypes.func,
}

export default App
