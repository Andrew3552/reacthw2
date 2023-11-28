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

export default MainProduct