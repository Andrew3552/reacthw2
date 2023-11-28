import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody";
import ModalClose from "../../../Modal/ModalClose";
import ModalFooter from "../../../Modal/ModalFooter";
import ModalHeader from "../../../Modal/ModalHeader";
import ModalWrapper from "../../../Modal/ModalWrapper";

import "./ProductModal.scss";

const ProductModal = ({
  handleClose, 
  name, 
  image, 
  price, 
  article, 
  color, 
  handleFavorite, 
  isFavorite, 
  isCart, 
  handleAddToCart
}) => {

    return (
    <ModalWrapper ModalClose={handleClose}>
      <Modal>
            <ModalClose  ModalClose={handleClose}/>
        <ModalHeader>
          <ModalBody>
            <img className="modal-cart__item-img" src={image} alt="" />
            <p className="modal-cart__item-title">
              <b>Name:</b> {name}
            </p>
            <p className="modal-cart__item-price">
              <b>Price:</b> {price} $
            </p>
            <p className="modal-cart__item-color">
              <b>Color:</b> {color}
            </p>
          </ModalBody>
        </ModalHeader>
        <ModalFooter 
        secondText="Favorite"
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}
        isCart={isCart}
        handleAddToCart={handleAddToCart}
        ModalClose={handleClose}
        article={article}
        firstText="Add to cart"
        >
        </ModalFooter>
      </Modal>
    </ModalWrapper>
  );
};

export default ProductModal;
