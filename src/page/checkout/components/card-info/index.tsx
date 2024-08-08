import { Minus, Plus, Trash2Icon } from "lucide-react";
import { CoffeContext, } from "../../../../context/coffe";
import { CardContainer, CardInfoLeft } from './styles'
import { useContext } from "react";
import toast from "react-hot-toast";
import { OrderCoffeProps } from "../../../../reducers/coffe/coffe";
import { Coffe } from "../../../../data/items";

interface CardInfoProps {

    coffe: Coffe,
    quantity: number

}


const CardInfo = ({ coffe, quantity }: CardInfoProps) => {

    const { deleteCoffe, addNewCoffeList, decrementCoffeQnt, incrementCoffeQnt } = useContext(CoffeContext)

    function handleDeleteCoffe() {
        deleteCoffe(coffe.id)
        toast.success("Item deletado")
    }

    function handleInc() {
        decrementCoffeQnt(coffe)
    }

    function handleDecrementeCoffe() {
        incrementCoffeQnt(coffe, quantity)
    }

    return (
        <CardContainer>
            <CardInfoLeft>
                <img src={coffe.img} alt={coffe.title} />
                <div className="flex">
                    <h3>{coffe.title}</h3>
                    <div className="flex-btns">
                        <div className="area-btns">
                            <button onClick={handleDecrementeCoffe}><Minus /></button>
                            <span>{quantity}</span>
                            <button onClick={handleInc}><Plus /></button>
                        </div>
                        <button className="remove" onClick={handleDeleteCoffe}>
                            <Trash2Icon color="#8047F8" /> Remover
                        </button>
                    </div>
                </div>
            </CardInfoLeft>
            <span className="price">{new Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(coffe.value)}</span>
        </CardContainer>
    );
}

export default CardInfo;