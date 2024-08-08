import { MapPin, ShoppingCart } from 'lucide-react'
import Logo from '../../assets/logo.png'
import { HeaderContainer, ContainerLeft, ContainerState, ContainerCart } from './styles'
import { useContext } from 'react'
import { CoffeContext } from '../../context/coffe'
import { NavLink } from 'react-router-dom'


const Header = () => {

    const { orderCoffe } = useContext(CoffeContext)

    return (
        <HeaderContainer>
            <div className='header'>
               <NavLink to="/">
                 <img src={Logo} alt="" />
               </NavLink>

                <ContainerLeft>
                    <ContainerState>
                        <MapPin size={20} color="#8047F8" strokeWidth={3} />
                        <span>Porto Alegre, RS</span>
                    </ContainerState>
                    <NavLink to="/checkout">
                        <ContainerCart>

                            <ShoppingCart size={20} color="#C47F17" strokeWidth={3} />
                            {
                                orderCoffe.items.length > 0 && <span className='count'>{orderCoffe.items.length}</span>
                            }


                        </ContainerCart>
                    </NavLink>
                </ContainerLeft>

            </div>
        </HeaderContainer>
    );
}
export default Header;