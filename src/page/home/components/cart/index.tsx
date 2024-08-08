import { Coffee, ShoppingCart } from "lucide-react";
import { CartContainer, CartContainerFooter } from "./styled";
import { useContext, useState } from "react";
import { CoffeContext } from "../../../../context/coffe";
import toast from 'react-hot-toast';

interface CartProps {
    data: {
        id: number;
        img: string
        tags: string[];
        title: string;
        description: string;
        value: number
    }
}

const Cart = ({ data }: CartProps) => {

    const { addNewCoffeList, orderCoffe } = useContext(CoffeContext)

    const [count, setCount] = useState(1)

    function handleInc() {
        setCount((state) => state + 1)
        
    }

    function handleDec() {
        if (count >= 2) {
            setCount((state) => state - 1)
        }

    }


    function handleAddCoffeList() {
        addNewCoffeList(data, count)
        toast.success("Item adicionado a sacola")
    }

    return (
        <CartContainer>
            <div className="container-img">
                <img src={data.img} alt="" />
            </div>
            <div className="tags">
                {data.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="info">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <CartContainerFooter>
                <span className="price">{data.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                <div className="flex">
                    <div className="area-btns">
                        <button onClick={handleDec}>-</button>
                        <span>{count}</span>
                        <button onClick={handleInc}>+</button>
                    </div>
                    <button className="cart" onClick={handleAddCoffeList}>
                        <ShoppingCart color="#FFF" strokeWidth={3} />
                    </button>
                   
                </div>
            </CartContainerFooter>
            
        </CartContainer>
    );
}

export default Cart;