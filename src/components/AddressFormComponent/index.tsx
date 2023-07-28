import { CepRuaWrapper, LastInfoWrapper, AddressForm } from "./styles";

export function AddressFormComponent() {
    return(
        <AddressForm>
            <CepRuaWrapper>
                <input type="text" className="cepInput" placeholder="CEP" />
                <input type="text" className="ruaInput" placeholder="Rua" />
            </CepRuaWrapper>
            <LastInfoWrapper>
                <input type="text" className="numeroInput" placeholder="Numero" />
                <input type="text" className="complementoInput" placeholder="Complemento" />
                <input type="text" className="bairroInput" placeholder="Bairro" />
                <input type="text" className="cidadeInput" placeholder="Cidade" />
                <input type="text" className="ufInput" placeholder="UF" />
            </LastInfoWrapper>
        </AddressForm>
    );
}