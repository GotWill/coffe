export const formatPrice = (price: number) =>{
    return new Intl.NumberFormat('pt-BR',{
        currency: 'BRL',
        style: 'currency'
    }).format(price)
}