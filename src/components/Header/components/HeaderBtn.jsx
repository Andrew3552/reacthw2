import PropTypes from "prop-types";

import HeartIcon from "./icons/heart"
import ShoppingCartIcon from "./icons/shopping-cart"

const HeaderBtn = ({favorite, addToCart}) => {

    return  (
        <div className="header__btn">
            <div>
                <HeartIcon className="icon-favorite"/>
                <span>{favorite.length}</span>
            </div>
            <div>
                <ShoppingCartIcon className="icon-basket" />
                <span>{addToCart.length}</span>
            </div> 
        </div>
    )
}

HeaderBtn.propTypes = {
    favorite: PropTypes.array,
    addToCart: PropTypes.array
}

export default HeaderBtn




