import Coffe1 from '../assets/1.png'
import Coffe2 from '../assets/2.png'
import Coffe3 from '../assets/3.png'
import Coffe4 from '../assets/4.png'
import Coffe5 from '../assets/5.png'
import Coffe6 from '../assets/6.png'
import Coffe7 from '../assets/7.png'
import Coffe8 from '../assets/8.png'


export interface Coffe {
    id: number;
    img: string
    tags: string[];
    title: string;
    description: string;
    value: number
}


export const dataCoffe: Coffe[] = [
    {
        id: 1,
        tags: ['Tradicional'],
        img: Coffe1,
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        value: 9.90
    },
    {
        id: 2,
        tags: ['Tradicional'],
        img: Coffe2,
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        value: 9.90
    },
    {
        id: 3,
        tags: ['Tradicional'],
        img: Coffe3,
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        value: 9.90
    },
    {
        id: 4,
        tags: ['Tradicional', 'gelado'],
        img: Coffe4,
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        value: 9.90
    },
    {
        id: 5,
        tags: ['Tradicional', 'com leite'],
        img: Coffe5,
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        value: 9.90
    },
    {
        id: 6,
        tags: ['Tradicional', 'com leite'],
        img: Coffe6,
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        value: 9.90
    },
    {
        id: 7,
        tags: ['Tradicional', 'com leite'],
        img: Coffe7,
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        value: 9.90
    },
    {
        id: 8,
        tags: ['Tradicional', 'com leite'],
        img: Coffe8,
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        value: 9.90
    },
]