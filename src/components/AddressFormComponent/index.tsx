import { useFormContext } from "react-hook-form";
import { CepRuaWrapper, LastInfoWrapper, AddressFormStyle } from "./styles";

export function AddressFormComponent() {
    const { register } = useFormContext()

    return(
        <AddressFormStyle>
            <CepRuaWrapper>
                <input type="text" className="cepInput" placeholder="CEP" {...register('cep')} />
                <input type="text" className="ruaInput" placeholder="Rua" {...register('rua')} />
            </CepRuaWrapper>
            <LastInfoWrapper>
                <input type="text" className="numeroInput" placeholder="Numero" {...register('numero', { valueAsNumber: true })}  />
                <input type="text" className="complementoInput" placeholder="Complemento" {...register('complemento')}  />
                <input type="text" className="bairroInput" placeholder="Bairro" {...register('bairro')}  />
                <input type="text" className="cidadeInput" placeholder="Cidade" {...register('cidade')}  />
                <input type="text" className="ufInput" placeholder="UF" {...register('uf')}  />
            </LastInfoWrapper>
        </AddressFormStyle>
    );
}