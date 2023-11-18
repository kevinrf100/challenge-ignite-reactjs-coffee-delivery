import { useTheme } from "styled-components";
import HeaderForm from "../HeaderForm";
import { AddressFormContainer } from "./styles";
import { MapPin } from "phosphor-react";

export default function AddressForm() {
  const theme = useTheme();

  return (
    <AddressFormContainer>
      <HeaderForm
        icon={<MapPin size={22} color={theme["yellow-800"]} />}
        title="Endereço de Entrega"
        description="Informe o endereço onde deseja receber seu pedido"
      />
    </AddressFormContainer>
  );
}
