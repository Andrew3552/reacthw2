
const ModalWrapper = ({children, ModalClose}) => {

    const handWrapperClick = (e) => {
        if (e.target === e.currentTarget) {
            ModalClose()
        }
    }

    return (
        <div className="modal__wrapper" onClick={handWrapperClick}>{children}</div>
    )
}

export default ModalWrapper