import { useTheme } from "styled-components";
import HeaderForm from "../HeaderForm";
import { AddressFormContainer, AddressInputContainer } from "./styles";
import { MapPin } from "phosphor-react";
import Input from "../../../../../components/input";
import { useState } from "react";

export default function AddressForm() {
  const theme = useTheme();
  const [cep, setCep] = useState("");
  const [street, seStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  return (
    <AddressFormContainer>
      <HeaderForm
        icon={<MapPin size={22} color={theme["yellow-800"]} />}
        title="Endereço de Entrega"
        description="Informe o endereço onde deseja receber seu pedido"
      />

      <AddressInputContainer>
        <Input
          onChange={(event) => setCep(event.target.value)}
          value={cep}
          className="cep"
          type="number"
          placeholder="CEP"
        />
        <Input
          onChange={(event) => seStreet(event.target.value)}
          value={street}
          className="street"
          type="text"
          placeholder="Rua"
        />
        <Input
          onChange={(event) => setNumber(event.target.value)}
          value={number}
          className="number"
          type="number"
          placeholder="Número"
        />
        <Input
          onChange={(event) => setComplement(event.target.value)}
          value={complement}
          className="complement"
          type="text"
          placeholder="Complemento"
        />
        <Input
          onChange={(event) => setDistrict(event.target.value)}
          value={district}
          className="district"
          type="text"
          placeholder="Bairro"
        />
        <Input
          onChange={(event) => setCity(event.target.value)}
          value={city}
          className="city"
          type="text"
          placeholder="Cidade"
        />
        <Input
          onChange={(event) => setUf(event.target.value)}
          value={uf}
          className="uf"
          type="text"
          placeholder="UF"
        />
      </AddressInputContainer>
    </AddressFormContainer>
  );
}
