import { Trash } from "phosphor-react";
import { RemoveButtonWrapper } from "./styles";

export function RemoveButton() {
    return(
        <RemoveButtonWrapper className="removeButton">
            <Trash size={16} />
            <span>REMOVER</span>
        </RemoveButtonWrapper>
    );
}