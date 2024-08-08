import { useContext } from "react";
import { FooterContainer } from "./styles";
import { CoffeContext } from "../../../../context/coffe";
import { formatPrice } from "../../../../helpers/formatPrice";
import { useNavigate } from "react-router-dom";


const FooterCard = () => {

    const {orderCoffe, userInfo, payment, clearCoffe, clearPayment} = useContext(CoffeContext)

    const valueItems = orderCoffe.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.coffe.value * currentValue.quantity
    },0)
    

    const btnIsDisabled = userInfo.city && userInfo.uf && userInfo.neighborhood && userInfo.number && userInfo.road;

    console.log("aqu", userInfo)

    
    const navigate = useNavigate()

    function handleToPageSuccess(){
        navigate('/success')
        clearCoffe()
        clearPayment()
        
    }
    


    return ( 
        <FooterContainer>
           
            <div>
                <span>Total de itens</span>
                <span>{formatPrice(valueItems)}</span>
            </div>
            <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
            </div>
            <div>
                <h3>Total</h3>
                <span>{formatPrice(valueItems + 3.50)}</span>
            </div>

            <button type="submit" disabled={!btnIsDisabled || !payment} onClick={handleToPageSuccess}>confirmar pedido </button>
        </FooterContainer>
     );
}
 
export default FooterCard;