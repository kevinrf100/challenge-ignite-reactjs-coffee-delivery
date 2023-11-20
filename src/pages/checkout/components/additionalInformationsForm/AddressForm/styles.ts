import styled from "styled-components";
import { BasicFormContainer } from "../styles";

export const AddressFormContainer = styled(BasicFormContainer)``;

export const AddressInputContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 12.5rem 17.5rem 3.75rem;
  grid-template-areas:
    "cep cep cep"
    "street street street"
    "number complement complement"
    "district city uf";

  column-gap: 0.75rem;
  row-gap: 1rem;

  .cep {
    grid-area: cep;
    max-width: 12.5rem;
  }

  .street {
    grid-area: street;
  }

  .complement {
    grid-area: complement;
  }

  .district {
    grid-area: district;
  }

  .city {
    grid-area: city;
  }

  .uf {
    grid-area: uf;
  }
`;
