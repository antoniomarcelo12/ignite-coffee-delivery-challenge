import { ReactNode, createContext } from "react";

interface AllProductsProviderProps {
    children: ReactNode;
}

export interface ProductsContextData {
    AllProductsData: ProductType[]
}

export interface ProductType {
    coffeeName: string;
    coffeeDescription: string;
    coffeePrice: number;
    coffeeImage: string;
    coffeeTypes: string[];
}

export const AllProductsContext = createContext({} as ProductsContextData)

const AllProductsData = [
    {
        coffeeName: 'Expresso Tradicional',
        coffeeDescription: 'O tradicional café feito com água quente e grãos moídos',
        coffeePrice: 4.99,
        coffeeTypes: ['tradicional'],
        coffeeImage: '/src/assets/coffees/expressotradicional.png',
    },
    {
        coffeeName: 'Expresso Americano',
        coffeeDescription: 'Expresso diluído, menos intenso que o tradicional',
        coffeePrice: 4.99,
        coffeeTypes: ['tradicional'],
        coffeeImage: '/src/assets/coffees/expressoamericano.png',
    },
    {
        coffeeName: 'Expresso Cremoso',
        coffeeDescription: 'Café expresso tradicional com espuma cremosa',
        coffeePrice: 6.99,
        coffeeTypes: ['tradicional'],
        coffeeImage: '/src/assets/coffees/expressocremoso.png',
    },
    {
        coffeeName: 'Expresso Gelado',
        coffeeDescription: 'Bebida preparada com café expresso e cubos de gelo',
        coffeePrice: 7.99,
        coffeeTypes: ['tradicional', 'gelado'],
        coffeeImage: '/src/assets/coffees/expressogelado.png',
    },
    {
        coffeeName: 'Café com Leite',
        coffeeDescription: 'Meio a meio de expresso tradicional com leite vaporizado',
        coffeePrice: 6.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: '/src/assets/coffees/cafecomleite.png',
    },
    {
        coffeeName: 'Latte',
        coffeeDescription: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        coffeePrice: 8.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: '/src/assets/coffees/latte.png',
    },
    {
        coffeeName: 'Capuccino',
        coffeeDescription: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        coffeePrice: 9.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: '/src/assets/coffees/capuccino.png',
    },
    {
        coffeeName: 'Macchiato',
        coffeeDescription: 'Café expresso misturado com um pouco de leite quente e espuma',
        coffeePrice: 8.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: '/src/assets/coffees/macchiato.png',
    },
    {
        coffeeName: 'Mocaccino',
        coffeeDescription: 'Café expresso com calda de chocolate, pouco leite e espuma',
        coffeePrice: 10.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: '/src/assets/coffees/mocaccino.png',
    },
    {
        coffeeName: 'Chocolate Quente',
        coffeeDescription: 'Bebida feita com chocolate dissolvido no leite quente e café',
        coffeePrice: 11.99,
        coffeeTypes: ['especial', 'com leite'],
        coffeeImage: '/src/assets/coffees/chocolatequente.png',
    },
    {
        coffeeName: 'Cubano',
        coffeeDescription: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        coffeePrice: 14.99,
        coffeeTypes: ['especial', 'alcoolico', 'gelado'],
        coffeeImage: '/src/assets/coffees/cubano.png',
    },
    {
        coffeeName: 'Havaiano',
        coffeeDescription: 'Bebida adocicada preparada com café e leite de coco',
        coffeePrice: 10.99,
        coffeeTypes: ['especial'],
        coffeeImage: '/src/assets/coffees/havaiano.png',
    },
    {
        coffeeName: 'Árabe',
        coffeeDescription: 'Bebida preparada com grãos de café árabe e especiarias',
        coffeePrice: 14.99,
        coffeeTypes: ['especial'],
        coffeeImage: '/src/assets/coffees/arabe.png',
    },
    {
        coffeeName: 'Irlandês',
        coffeeDescription: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        coffeePrice: 15.99,
        coffeeTypes: ['especial', 'alcoolico'],
        coffeeImage: '/src/assets/coffees/irlandes.png',
    }
]

export function AllProductsProvider({ children }: AllProductsProviderProps) {
    return(
        <AllProductsContext.Provider value={{AllProductsData}}>
            { children }
        </AllProductsContext.Provider>
    );
}