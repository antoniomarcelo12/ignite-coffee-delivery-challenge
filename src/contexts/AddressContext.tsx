import { ReactNode, createContext, useState } from "react";
import { AddressFormData } from "../components/CompleteYourOrder";

interface AddressProviderProps {
    children: ReactNode
}

interface AddressInfoType {
    cep: string;
    rua: string;
    numero: number;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
}

interface AddressContextType {
    addressState: AddressInfoType;
    setAddress: (address: AddressFormData) => void;
}

export const AddressContext = createContext({} as AddressContextType)

export function AddressProvider({ children }: AddressProviderProps) {

    const [addressState, setAddressState] = useState<AddressInfoType>({} as AddressInfoType)

    function setAddress(address: AddressFormData) {
        const newObj = {
            cep: address.cep,
            rua: address.rua,
            numero: address.numero,
            complemento: address.complemento,
            bairro: address.bairro,
            cidade: address.cidade,
            uf: address.uf,
        }

        setAddressState(newObj)
    }


    return(
        <AddressContext.Provider value={{addressState, setAddress}}>
            { children }
        </AddressContext.Provider>
    );
}