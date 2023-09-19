import styled from "styled-components";
import { Colors } from "../../styles/styles";

export const StyledInput = styled.input`

    background-color: ${Colors.grey};
    outline: none !important;
    border: none;
    width: 100%;
    max-width: 273px;
    border-radius: 50px;
    padding-left: 10px;
    font-size: 16px;
    height: 32px;
    color:  ${Colors.white};

    ::placeholder{
        color:  ${Colors.white};
    }
    margin-bottom: 16px;
   
`