import { BadgeDollarSign, CreditCard, MapPin } from "lucide-react";
import { BaseInput, CheckoutContainer, ContainerCoffe, FormContainer, CheckoutFooter } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeContext } from "../../context/coffe";
import CardInfo from "./components/card-info";
import FooterCard from "./components/footer-card";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";


interface codeProps {
    bairro: string;
    complemento: string;
    localidade: string;
    logradouro: string;
    uf: string;
    ddd: string;
    erro: string
}

const Checkout = () => {

    const { orderCoffe, addNewInfoUser, deleteUserInfo, setPaymentCard, payment } = useContext(CoffeContext)

    const [code, setCode] = useState('')


    const userSchema = zod.object({
        road: zod.string(),
        number: zod.number(),
        complement: zod.string(),
        neighborhood: zod.string(),
        city: zod.string(),
        uf: zod.string()
    })



    type userSchema = zod.infer<typeof userSchema>

    const { register, reset, watch } = useForm<userSchema>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            city: '',
            complement: '',
            neighborhood: '',
            number: 0,
            road: '',
            uf: ''
        }
    })

    const numberAdress = watch('number')

    useEffect(() => {
        if (code.length >= 8) {


            fetch(`https://viacep.com.br/ws/${code}/json`)
                .then(response => response.json())
                .then((data: codeProps) => {

                    const dataUser = {
                        city: data.localidade,
                        complement: data.complemento,
                        neighborhood: data.bairro,
                        number: numberAdress,
                        road: data.logradouro,
                        uf: data.uf
                    }

                    reset(dataUser);
                    addNewInfoUser(dataUser)

                }).catch((_) => {
                    toast.error("CEP não encontrado")
                    reset({
                        city: '',
                        complement: '',
                        neighborhood: '',
                        number: 0,
                        road: '',
                        uf: ''
                    })
                    deleteUserInfo()
                })
        }
    }, [code, numberAdress])


    return (
        <CheckoutContainer>
            <div className="flex">
                <h3>Complete seu pedido</h3>
                <FormContainer>
                    <div className="header">
                        <MapPin />
                        <div>
                            <h4>Endereço de Entrega</h4>
                            <p>Informe o endereço onde deseja receber seu pedido</p>


                        </div>
                    </div>

                    <form action="">
                        <BaseInput width={200} type="text" placeholder="CEP" value={code} onChange={(e) => setCode(e.target.value)} />
                        <BaseInput width={560} placeholder="RUA" {...register('road')} />
                        <div className="flex">
                            <BaseInput width={200} type="number" placeholder="Número" {...register('number', { valueAsNumber: true })} />
                            <BaseInput width={348} placeholder="Complemento" {...register('complement')} />
                        </div>
                        <div className="flex">
                            <BaseInput width={200} placeholder="Bairro" {...register('neighborhood')} />
                            <BaseInput width={276} placeholder="Cidade" {...register('city')} />
                            <BaseInput width={60} placeholder="UF" {...register('uf')} />
                        </div>
                    </form>
                </FormContainer>

                <CheckoutFooter>
                    <div className="header">
                        <BadgeDollarSign color="#8047F8" />
                        <div>
                            <h4>Pagamento</h4>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>

                    <div className="flex-opt">
                        <button className={` ${payment === "CREDITCARD" && 'active'} `} onClick={() => setPaymentCard('CREDITCARD')}>
                            <CreditCard color="#8047F8" />
                            <span>Cartão de crédito</span>
                        </button>
                        <button className={` ${payment === "DEBITCARD" && 'active'} `} onClick={() => setPaymentCard('DEBITCARD')}>
                            <CreditCard color="#8047F8" />
                            <span>cartão de débito</span>
                        </button>
                        <button className={` ${payment === "MONEY" && 'active'} `} onClick={() => setPaymentCard('MONEY')}>
                            <CreditCard color="#8047F8" />
                            <span>dinheiro</span>
                        </button>
                    </div>
                </CheckoutFooter>
            </div>
            <div className="flex">
                <h3>Cafés selecionados</h3>
                <ContainerCoffe>
                    {orderCoffe.items.length > 0 ?
                        orderCoffe.items.map(coffe => <CardInfo key={coffe.coffe.id} coffe={coffe.coffe} quantity={coffe.quantity} />) :
                        (<span>Nenhum item na lista</span>)}
                    {
                        orderCoffe.items.length > 0 && <FooterCard />
                    }
                </ContainerCoffe>
            </div>


        </CheckoutContainer>
    );
}

export default Checkout;