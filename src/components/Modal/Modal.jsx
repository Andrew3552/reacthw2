import cx from 'classnames'
const Modal = ({children, classNames}) => {

    
    return (
        <div className={cx("modal", classNames)}>
            <div className={cx("modal__box", classNames)}>
                {children}
            </div>
        </div>
    )
}

export default Modal