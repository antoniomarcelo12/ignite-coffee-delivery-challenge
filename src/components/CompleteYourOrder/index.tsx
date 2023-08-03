import { AddressFormComponent } from "../AddressFormComponent";
import { Cart } from "../Cart";
import { PaymentCartComponent } from "../PaymentCartComponent";
import { AddressWrapper, AdressHeader, CompleteYourOrderCartWrapper, CompleteYourOrderAddressWrapper, CompleteYourOrderWrapper } from "./styles";
import { MapPinLine } from 'phosphor-react'
import { FormProvider, UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { useContext } from "react";
import { AddressContext } from "../../contexts/AddressContext";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../../contexts/CartContext";


const AddressFormValidationSchema = zod.object({
    cep: zod.string().min(8, 'Informe o cep.'),
    rua: zod.string()
            .min(5, 'O nome da rua deve ter ao menos 5 caracteres.')
            .max(30, 'O nome da rua deve ter no máximo 30 caracteres.'),
    numero: zod.number()
                .min(1, 'Informe o numero da casa'),
    complemento: zod.string()
                    .optional(),
    bairro: zod.string()
                .min(5, 'Nome do bairro deve ter ao menos 5 caracteres.')
                .max(20, 'Nome do bairro deve ter no máximo 20 caracteres.'),
    cidade: zod.string()
                .min(5, 'Nome da cidade deve ter ao menos 5 caracteres.')
                .max(40, 'Nome da cidade deve ter no máximo 40 caracteres.'),
    uf: zod.string()
            .min(2, 'O UF deve ter dois caracteres.')
            .max(2, 'O UF deve ter dois caracteres.'),
    })

export type AddressFormData = zod.infer<typeof AddressFormValidationSchema>


export let AddressForm: UseFormReturn<{
    cep: string;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    uf: string;
    complemento?: string | undefined;
}, any, undefined>

export function CompleteYourOrder() {
    
    AddressForm = useForm<AddressFormData>({
        resolver: zodResolver(AddressFormValidationSchema),
        defaultValues: {
            cep: '',
            rua: '',
            bairro: '',
            cidade: '',
            uf: '',
        }
    })


    const { handleSubmit } = AddressForm
    const { setAddress } = useContext(AddressContext)
    const { resetCartState } = useContext(CartContext)

    const navigate = useNavigate()

    function handleCompleteOrder(data: AddressFormData) {
        event?.preventDefault()
        setAddress(data)
        navigate('/success')
        resetCartState()
    }
   

    return(
        <FormProvider {...AddressForm}>
            <CompleteYourOrderWrapper onSubmit={handleSubmit(handleCompleteOrder)}>
                <CompleteYourOrderAddressWrapper>
                    <h1 className="completeYourOrderAddressHeader">Complete seu pedido</h1>
                    
                        <AddressWrapper>
                            <AdressHeader>
                                <MapPinLine size={22} />
                                    <div>
                                        <h1>Endereço de entrega</h1>
                                        <p>Informe o endereço onde deseja receber seu pedido</p>
                                    </div>
                            </AdressHeader>
                            
                            <AddressFormComponent />

                        </AddressWrapper>
                    
                    <PaymentCartComponent />
                    
                </CompleteYourOrderAddressWrapper>

                <CompleteYourOrderCartWrapper>

                    <Cart />
                
                </CompleteYourOrderCartWrapper>


                
            </CompleteYourOrderWrapper>
        </FormProvider>
    );
}