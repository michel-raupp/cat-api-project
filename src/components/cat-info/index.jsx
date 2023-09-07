/* eslint-disable react/prop-types */

import { styled } from "styled-components";
import { Flex } from "../../styles/styles";

const StyledBreedInfo = styled(Flex)`
flex-direction: column;
align-items: flex-start;
width: 100%;
max-width: 400px;
margin: 0 auto;
gap: 10px;

h3, h4{
    font-size: 16px;
    font-weight: 600;
}
h4{
    color: #0084ff;
}

.personalidade{
border: 1px solid #000;
border-radius: 8px;
padding: 8px;
margin: 10px 0;
}
`

function BreedInfo({ breed }) {
    return (
        <StyledBreedInfo>
            {breed && (
                <>
                    <h3>{breed.name}</h3>
                    <h4>{breed.origin}</h4>

                    <p className="personalidade">{breed.temperament}</p>
                    <p className="description"> {breed.description}</p>
                </>
            )}
        </StyledBreedInfo>
    );
}

export default BreedInfo;
