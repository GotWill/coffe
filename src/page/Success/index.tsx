import { SuccessContainer, ContainerInfo, BoxInfo } from "./styles";
import img from '../../assets/delivery.png'
import { useContext, useEffect } from "react";
import { CoffeContext } from "../../context/coffe";
import { CircleDollarSign, MapPin, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";


type paymentType = "CREDITCARD" | "DEBITCARD" | "MONEY" | null;


const Success = () => {

    const searchParams = new URLSearchParams(document.location.search)

    const payment = searchParams.get("payment")

    const { userInfo } = useContext(CoffeContext)

    const navigate = useNavigate()

    function handleSetPayment(payment: paymentType) {
            switch (payment) {
                case "CREDITCARD":
                    return 'Cartão de credito'
                case "DEBITCARD":
                    return 'Cartão de debito'
                case "MONEY":
                    return "Dinheiro"
                default: ''
            }
    }

    useEffect(() => {
        if (!userInfo || !payment) {
            navigate('/')
        }
    }, [userInfo, payment])



    return (
        <SuccessContainer>
            <ContainerInfo>
                <div className="top">
                    <h3>Uhu! Pedido confirmado</h3>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </div>

                <BoxInfo>
                    <div>
                        <div className="rounded-purple">
                            <MapPin color="#FFF" size={16} />
                        </div>
                        <p>
                            Entrega em <strong>{userInfo.road}, {userInfo.number}</strong> {userInfo.neighborhood} - {userInfo.city}, {userInfo.uf}
                        </p>
                    </div>
                    <div>
                        <div className="rounded-yellow">
                            <Timer color="#FFF" size={16} />
                        </div>
                        <div className="flex">
                            <p>
                                Previsão de entrega
                            </p>
                            <p><strong>20 min - 30 min </strong></p>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-yellow-dark"><CircleDollarSign color="#FFF" size={16} /></div>
                        <div className="flex">
                            <p>Pagamento na entrega</p>
                            <p><strong>{handleSetPayment(payment as paymentType)}</strong></p>
                        </div>
                    </div>
                </BoxInfo>
            </ContainerInfo>


            <img src={img} alt="" />
        </SuccessContainer>
    );
}

export default Success;