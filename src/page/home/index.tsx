import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react';
import { HomeContainer, Hero, InfoLeftHero, DetailsIconLeftHero, ContainerCoffe } from './styles'
import Coffe from '../../assets/coffe.png'
import Cart from './components/cart';
import { dataCoffe } from '../../data/items';

const Home = () => {
    return (
        <HomeContainer>
            <Hero>
                <InfoLeftHero>
                    <div className="top">
                        <h1>Encontre o café perfeito<br></br> para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>
                    <DetailsIconLeftHero>
                        <div className='flex'>
                            <div className="rounded hum"><ShoppingCart strokeWidth={3} size={20} color='#FFF' /></div>
                            <span>Compra simples e segura</span>
                        </div>
                        <div className='flex'>
                            <div className="rounded two"><Package strokeWidth={3} color='#FFF' /></div>
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                        <div className='flex'>
                            <div className="rounded three"><Timer strokeWidth={3} color='#FFF' /></div>
                            <span>Entrega rápida e rastreada</span>
                        </div>
                        <div className='flex'>
                            <div className="rounded four"><Coffee strokeWidth={3} color='#FFF' /></div>
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </DetailsIconLeftHero>
                </InfoLeftHero>
                <img src={Coffe} alt="" />
            </Hero>

            <ContainerCoffe>
                <h2>Nossos cafés</h2>
                
                <div className='grid'>
                    {dataCoffe.map((coffe) => {
                        return <Cart key={coffe.id} data={coffe}/>
                    })}
                </div>
            </ContainerCoffe>

        </HomeContainer>
    );
}

export default Home;