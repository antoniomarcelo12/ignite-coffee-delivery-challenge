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
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1691366400&Signature=pA49xF00Th4YfvrPXIXAhIL2ASVWGLZG4AHcegRZgL7LYVtp~kmFZidw1Oq~5ePW7StmIhg375PJu59lXvrfFDPJLYfpmiELhY3gRUFYl6VYAIWiKZNFlkSvGrFk2V8qdJEVkFFnzYw5lBF~R~0c2Ik2UXaUAtEDCuvzLntIm~6z1WH6ctzp2eVL5kx0f~y6ej6Osc9jhu7kJpZ-E3axIcr11kvunxwaAOSgXUzF1Hk-CNSi5ZOtfBaeMsDYovvviVDxEMHIYMo~sDI~Xjnl9gJrDPVW~qj~cGURysCv3D82Kd-zpRVR0NItY2UiZgG13MyfzbVHt-82Krss62nc2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Expresso Americano',
        coffeeDescription: 'Expresso diluído, menos intenso que o tradicional',
        coffeePrice: 4.99,
        coffeeTypes: ['tradicional'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/b6af/775d/aaa94dcb37dfe1ee6535aae5b9356e9a?Expires=1691366400&Signature=GbQdtJh932xzLBhsF-yKLSnULAgwI4l5YuBBB8qKPeFvx7Rce--rLeN0dlwEe3zCRCF1TquKNz48ziXvkfHhvEqVIPNCCHij1XY9xuvcM4STYSJRDgvOSL4iiw~Dg8GqHyLIHEzqGhkjphKWoxqBq83eA6E1skGxtrnUodwTDsSMtz2JpKaperbn1VAzdfp9SCSbR6RI0egksbxkPEo5QEsoBGgk~jbgB8M8fHyqokEc-kzDuhF178O0WRXxelkfJPM2jEr~uB8asXHhR0mDoIoq3WI0bZEoolhebAZA21nkX8oHOvVsXlaK5XRfNX9Kgv5B1B5aey7IS0XRCbCr2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Expresso Cremoso',
        coffeeDescription: 'Café expresso tradicional com espuma cremosa',
        coffeePrice: 6.99,
        coffeeTypes: ['tradicional'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/bcfa/72ad/62a8600eeded092c17fd14240624545e?Expires=1691366400&Signature=LvI9FT-GZ0xPg8p1CwSSw2OFdRyYNMY~UrAU7hUqrpsgXZ-QqqBw~NeZ7p5mb9h6xX1oSwKRHAFGSGR2sdI9tkRThLSDKg7gRrMpG-pogmdiiA3ukCFoX1TW7t4gi-2Su8yVXrziqUhXP0eDlq2kFY3kgeufTHCFsc2h8C3rNTo2yuDiA34Bc92tJfbXiA2XjEZjLu4vWPV7C95jFR2o0rBYETJ30iqMEZfGRAGSRTQ5rbprhA5mn8VgTQmmnXzncdL56U-4~F1FJmkVGarBt7yegqZr~GWpixqccrBTdS-8adygZ31gkAVYP7DhqknGde47K7HIfrGEW41wltSaPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Expresso Gelado',
        coffeeDescription: 'Bebida preparada com café expresso e cubos de gelo',
        coffeePrice: 7.99,
        coffeeTypes: ['tradicional', 'gelado'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/f389/2f36/d263d0013831cd5b1fb27c6d2ac64353?Expires=1691366400&Signature=Ic0~1ZDxBI3rFE-A76XQAXg-G4u1xUTJ5krvkZii8zzFhXacmkROqjyhqcpt3vlfpJgjynIHznNNdBah8EGJHTmi8WZ5ul07sHETxVZbufVvyHLCxtRYfDJU7psV8EmfehPrHDR~1rJmnQmiRrDpIOGN670Gt8KnKdd6bRTjXa81luen1hCHhStVBtAZ2wqOh0gEaMp3DuNqi43DRN7oAJNK~OP~uEZoXs1EJGLewKfkzBvj-hEpdo0BN5hhk~dYcEKly4kBLzlA88CZF8S~DJ6lX~EnBTPo9X2Yfi-v87m8mqO4hK~8VsS3Qhu~t1bUwmb6unnmb7whgK~S2O1fsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Café com Leite',
        coffeeDescription: 'Meio a meio de expresso tradicional com leite vaporizado',
        coffeePrice: 6.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/96a1/748f/55962d2032bd0e2555d1261409dbd24d?Expires=1691366400&Signature=DunlIglhgCP~dRV14qPhsvyl3IYOulUfr~-IGunTNMpejTpSENO36ozu7OLzfc8CAGDnit~XjQ1ogM0V1dlYRUgWZSJQ1kOxJ~w6UOszTubtxOA1VckkxTpXQFzgZGZecaUnmI~8CKLgM~ALLrXPlTz~auEIiPXzIpf8gJaQUGZcGfI~iQajbXUmdKsHrhE8INgroJZ1C8Jaw1mOxMSEUNN2djL7pvNbY5Sntguw7vegjFODZzp5VjPbUm1lodqgVnI374sXKKP78e8A5ELDxV1g5oLE9-IZ0iTBr5Ma5LxoLc-LA9QCphLBoKPxIpuCDuRgTlLEeHvKXpZJXYr6fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Latte',
        coffeeDescription: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        coffeePrice: 8.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/0a3c/9586/9a75d3fa0ffdecc4bc46ca83d2342e1c?Expires=1691366400&Signature=F1dl1J43uRBQ~36FLfMKwlOjFcoKx0o1p3NAk-pB253CppZaZvcJ-e7A5apKmDNC0FtaFfj9FftAz0GhoExL4HdqsypkmVKCo1LdK1UNYFJMjQ3M3h9gsZNJMZzCXDUGiQeLl5kBeGzsjMm-lVI~RwIuEDtpT7AbLecXd9KJGke65rDymEuqq-tDQfRZGAwHIfrV7kqR9z~WrVqSOmnYVphy6mQAYVEAOuQbXsbQ~Lq8y22unkxBitCzehpzIxNNOrIUM9XBY93ko~-XhSS9m5U6n4ejNwxlOfzb3PJzZwnfvuHXy~4DC43GO5p5aibsOq1AEQjcS3a4GTqH3U-EGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Capuccino',
        coffeeDescription: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        coffeePrice: 9.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/6693/81b7/0a9565b6f322ac8b5229ee4fc4b47825?Expires=1691366400&Signature=ZnsFiPyo~t1mhwxZzxeTa2P4rYE7Ko161tB2lElno6JkjCIJdkQQwskLyvSZzbBNAxDsyml-AtE4NcLg1VmEk-DqO8JBZ18IHz2NEKLHEDES0wIrRR3aOt556IehTVuYRkH8yPpHlgsdF~O1g94wHOPrxqSzqxJXumg5V0ubOcqWo-z3yd6cXktR34HxJDHK~cXXA3lqcOjVH5d-VTwnrXrFBORjbaE6k-sfUvwOPMFbmX45g0rDjexQinps425834RC-z1W6Jv2PzPLhmqKk5IfTNifguT1IB7A-WRbiR6CL4my5NtNT6clhqNlIzqP8uqziriKdjoD1lhS8Fjx1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Macchiato',
        coffeeDescription: 'Café expresso misturado com um pouco de leite quente e espuma',
        coffeePrice: 8.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/890a/8773/a655c4fabfc9a7ecdc389e6ea93587ac?Expires=1691366400&Signature=itQd8PyUP2XysBSjk3OHnl6jsV706bh6XAzH4SUKjMbLGQbK5kkEou~ZU0BsGW0O~8uAaNTCB3nFsHrXSsWT~-ETnu0cCL1ZvdCWw20IfyetWqXmTemU3GzrfKV85pv0qdlXnCDZksWlbNLRCtEAQwfzxlgslCyokYff~jPVZBHdMo7NXSklNpsMjAmwE75gOMpcNHGls0MMm~E7vYPoeQ6d9-QFdd-zRvCgKBZwk-6ptQdv8kxZquoRT4ET1-dWIdZZ5MKWHTDAPpsqMoZ1DJn9jsA9c5Cjyu2aRrokIuQIa-NYAEyXzK1E159cIoTa92i4EChEHBFvYFglLNT8gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Mocaccino',
        coffeeDescription: 'Café expresso com calda de chocolate, pouco leite e espuma',
        coffeePrice: 10.99,
        coffeeTypes: ['tradicional', 'com leite'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/bc3e/4798/837b2a3ba5d0fa098e7e39985025efb7?Expires=1691366400&Signature=F2xZiHU2S-lYTf6J96BQR9vcUs9VMIDZQ6fceIS5eWDbOyjKdVGzxYG-MPyuiAgsgQ8vbskZwNT80GMNYgJfFWVvqS5TnZjMuu9VSRvKey0crvVIx0e6woYG2j9YeRn3lGVzNOpjpXM00qsGFyB0hrddgKPQxz4KT8cKGUuWbOtxa61snxrhLnCoNU9yipBcxJTlaGHXfELhQVJ8oqRR56kNx8fLp3O1R-SSEQtGzczloxMJyDkI1BJgFpLo-jWahasnXgVP71I40tQLuuv7Ds6b09dBCW-O96Mz-mL0idvppwfCiZk7CBWhoUfyiGBZMxc0gGsbfpIDOmhhoRcKYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Chocolate Quente',
        coffeeDescription: 'Bebida feita com chocolate dissolvido no leite quente e café',
        coffeePrice: 11.99,
        coffeeTypes: ['especial', 'com leite'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/4462/16dc/20b9de473c3aadc304466df059e1887e?Expires=1691366400&Signature=Z5ZfxiijR3c8Fov7YZDrbYHC-h-RPIzKMPiPttLQrvEvKq-2-hyKPjg9cJI6coacGzL4MSBt33V2AQS~IWmHi0ZDcWvbu5g8yDUp4to8Uza5EW3Dl1oH5DbbMv4HwO63KqIoV6mycm-XCXxT~qYWaIg3CvPOzTGHhPfkV3OxWLmzVQAh9lxEsBKWz7k5aJDLSh1kF8gHDIyI~gqjixHEexgo5cJR5FH9ozic8AHBFdqiDZUZeV84JjGTDsG~WCuHr7Oa8poQBmidNOenmcPGpRTSrHL3WfRDowUK4EqMLkjI1k9l5cNLMoGi-5GuGHjz6msGWuElJ1bZJS3QIR0ijg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Cubano',
        coffeeDescription: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        coffeePrice: 14.99,
        coffeeTypes: ['especial', 'alcoolico', 'gelado'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/dae3/2866/45ab1873edeac1c90c31203f5bf3ed52?Expires=1691366400&Signature=AzlRZd59Jm52Hdx-LU1LT85UkgVriu9goRfr3v~1K0cSsmJE6gHscRQ1I2tRtjp1xgjjyJpdh3eiclZ9WkBlJI-PHWZAA8p0oRPCXOO8ReyOtLwkr0b76279-1HWlkev9jUV02fWfMhHDue-5vqsdW7SEsQVB50mDYCN4Gg-NXV-NFUL9khq92mr0qw7DHYNw9zVlN4W9Ims7oRtPRxxi1JWYhL7UjXFSiCOaydwqb4rrnOJo1IHINuJfOiCO5jtk7gOqbFGQpyi7p4eRTbr5IeT3HijLLyRDazhwJlfvrcXHVwMFYW-2Ca8M2a2AJQ9TPQZiudRHArEQy1x1fEflQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Havaiano',
        coffeeDescription: 'Bebida adocicada preparada com café e leite de coco',
        coffeePrice: 10.99,
        coffeeTypes: ['especial'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/64fd/9a26/b6d3187556021c2da9fc80f2da41088f?Expires=1691366400&Signature=SiQx-G6t2qX9VIy8vb4IY-9KzTVVSMaXssezfLyAVV0VM-xIk2LXS-4vyCoutlHWbtC4fjfGiCrf5fgQ4TnGNjmRdsTSnN5d5TVjrTC86MB673zMd6nrabf7zISw9Jkn-8fJVt6l6-sK0huGlIAhNZUcRoEB5tFQa1C~IXlcys9~eIrpYk56dlf7zbUKC1DwogJDnXNNMyXYI2-rwkEgXC08A67m9fUUPGXPWiOVbwp6lPR8yNqXxv7IlPh4CxFddtJcvFUEMeaALvIrFmlajs2gCVzIMxdNjsdtz8la71uqLY9oH9S9rCdtvHMLX8e23HwBuZeetlFtdiBJhpv6ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Árabe',
        coffeeDescription: 'Bebida preparada com grãos de café árabe e especiarias',
        coffeePrice: 14.99,
        coffeeTypes: ['especial'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/8bcb/3d33/7b04857330d98e72e67bde570cbc8963?Expires=1691366400&Signature=JKy51Ssq~lF7IfCZXQKHVUvHfIi8pvXE5EjMHZjQfSLVrWuHyIhPK2GBQxPZYmNX4sUiySOCgdWfCalMVo59HjrOQcyM4SVsyDyn3QqSFJwpwkXGmiZhFCDqsBaDPDenAUX55s68FOPhldtEOQaZDyXw~uGuJVSCpL6l1YS-etwd~nakvj5gfi~ef8oXEHIHvpKH0ly1WhRyqJduue5cuP0OYxy9r6YrK42Fp-H~yLrw1NU1~l1U3ICPZJD9Uw~q4Fnux4UfPwxfc5CE~N-cfOWcSOsqr3G0cI9NTOXJHejc1qsnUIZFwo4qvfW1sfp40AsIuKJLiidNh1JVH~O6LA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        coffeeName: 'Irlandês',
        coffeeDescription: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        coffeePrice: 15.99,
        coffeeTypes: ['especial', 'alcoolico'],
        coffeeImage: 'https://s3-alpha-sig.figma.com/img/53b9/9cd5/c0cac4ecf7b9bd81c976cdd9fe2ab3a3?Expires=1691366400&Signature=BNulbbd-LLxS0FwZ7pA2rEN2mxw2cB4mlSMHkPvBHI~7vo2pEamr~hG6OjumBw7k1ZxrbDpmsc5uSFKZE47rkiVOg5I9tgo75Dicyw5j3beYfIwsB2c-r5I0JfAER0oNOQdD4QrdFgP~YKqFl7CqOGohP49xu5yapFAvdL-A71hpswpkjmPLOERV6OZSGoJPVxfS6Ju2rG2F7ovpOI7QxxVNFu5Pjnhljqp-JwPFobhV0PtZGES8fW-S9YLylqKHW0mE0yIlP2-Dfdt7E7vm0Anuj1mZlMirfbg1QcJ5TVurufbWnZ5HfFpM98mr6YW-QkIGJT8MWubEo9jCYrJWiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    }
]

export function AllProductsProvider({ children }: AllProductsProviderProps) {
    return(
        <AllProductsContext.Provider value={{AllProductsData}}>
            { children }
        </AllProductsContext.Provider>
    );
}