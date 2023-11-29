import PropTypes from "prop-types";

import Button from "../Button/Button"

const ModalFooter = ({
    firstText, 
    isCart, 
    article,
    handleAddToCartWithModalClose
}) => {

    return (
        <div className="modal__footer">
            {firstText && <Button className="modal__footer-btn"  onClick={() => handleAddToCartWithModalClose(article)}>
                {isCart ? "Add to cart" : ""} 
                </Button>}
        </div>
    )
}

ModalFooter.propTypes = {
    firstText: PropTypes.string,
    isCart: PropTypes.func,
    handleAddToCartWithModalClose: PropTypes.func,
    article: PropTypes.number
}

export default ModalFooter
