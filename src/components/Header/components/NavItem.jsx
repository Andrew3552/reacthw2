import cx from 'classnames'

const NavItem = (props) => {

    const {
        text,
        className = '',
        navigation,
        footerItem,
    


        ...restProps
    } = props
    

    return (
            
                <li className={cx("item", className, {"nav": navigation}, {"footer-item": footerItem})}><a href="#">{text}</a></li> 
           
            )
}

export default NavItem