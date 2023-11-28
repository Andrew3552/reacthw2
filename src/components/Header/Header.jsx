import Container from "../Helper/Container"
import Body from "../Helper/Body"
import NavMenu from "./components/NavMenu"
import HeaderBtn from "./components/HeaderBtn"
import Logo from "../../assets/img/logo.png"
import "./Header.scss"

const Header = ({favorite, addToCart}) => {

    return (
        <div className="header">
            <Container>
                <Body headerBody>
                    <a href="#">
                        <img src={Logo} alt="" />
                    </a>
                    <NavMenu />
                    <HeaderBtn favorite={favorite} addToCart={addToCart} />
                </Body>
            </Container>
        </div>
    )
}

export default Header