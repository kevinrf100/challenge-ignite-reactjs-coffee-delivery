import { useTheme } from "styled-components";
import HeaderForm from "../HeaderForm";
import { AddressFormContainer, AddressInputContainer } from "./styles";
import { MapPin } from "phosphor-react";
import Input from "../../../../../components/input";

export default function AddressForm() {
  const theme = useTheme();

  return (
    <AddressFormContainer>
      <HeaderForm
        icon={<MapPin size={22} color={theme["yellow-800"]} />}
        title="Endereço de Entrega"
        description="Informe o endereço onde deseja receber seu pedido"
      />

      <AddressInputContainer>
        <Input className="cep" type="number" placeholder="CEP" />
        <Input className="street" type="text" placeholder="Rua" />
        <Input className="number" type="number" placeholder="Número" />
        <Input className="complement" type="text" placeholder="Complemento" />
        <Input className="district" type="text" placeholder="Bairro" />
        <Input className="city" type="text" placeholder="Cidade" />
        <Input className="uf" type="text" placeholder="UF" />
      </AddressInputContainer>
    </AddressFormContainer>
  );
}
