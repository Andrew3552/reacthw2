import Button from "../Button/Button"

const ModalFooter = ({
    firstText, 
    isCart, 
    handleAddToCart, 
    article
}) => {

   
    
    return (
        <div className="modal__footer">
            {firstText && <Button className="modal__footer-btn"  onClick={() => 
                {console.log("Article value:", article); handleAddToCart(article)}}>
                {isCart ? "Add to cart" : ""} 
                </Button>}
        </div>
    )
}

export default ModalFooter
