import PropTypes from "prop-types";

import Container from "../../Helper/Container"
import Body from "../../Helper/Body"
import Products from "./component/Products"

import "./MainProduct.scss"

const MainProduct = ({
    handleFavorite, 
    productArray, 
    isFavorite, 
    isCart,
    handleAddToCart
}) => {

    return (
        <div className="main-product">
            <Container>
                <Body>           
                    <h2 className="product__title">Categories For Men</h2>
                    <Products 
                    handleFavorite={handleFavorite} 
                    isFavorite={isFavorite}
                    isCart={isCart}
                    handleAddToCart={handleAddToCart}
                    data={productArray}/>
                </Body> 
            </Container>
        </div>
    )
}

MainProduct.propTypes = {
    handleFavorite: PropTypes.func,
    productArray: PropTypes.array,
    isFavorite: PropTypes.func,
    isCart: PropTypes.func,
    handleAddToCart: PropTypes.func
}

export default MainProduct