/* eslint-disable react/prop-types */

import { styled } from "styled-components";
import { Colors, Flex } from "../../styles/styles";

const StyledBreedInfo = styled(Flex)`
flex-direction: column;
align-items: flex-start;
width: 100%;
max-width: 400px;
margin: 0 auto;
gap: 24px;

h3{
    font-size: 18px;
    font-weight: 600;
}


.personalidade{
    font-size: 14px;
font-weight: 400;
    padding: 8px 16px;
    border-radius: 50px;

    background-color: ${Colors.grey};
    color: ${Colors.white};

}

.temperament{
    font-weight: 200;
    background-color: transparent;
    border: 1px solid ${Colors.grey};
}
.personalidade-wrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

p.description{
    font-size: 14px;
    line-height: 1.6;
    font-weight: 200;
}
`

function BreedInfo({ breed }) {
    return (
        <StyledBreedInfo>
            {breed && (
                <>
                    <h3>{breed.name}</h3>
                    <div className="personalidade-wrapper">
                        <p className="personalidade">{breed.origin}</p>

                        <p className="personalidade">{breed.weight.metric} kg</p>
                        <p className="personalidade"> {breed.life_span} years</p>

                        <p className="personalidade temperament">{breed.temperament}</p>
                    </div>
                    <p className="description"> {breed.description}</p>
                </>
            )}
        </StyledBreedInfo>
    );
}

export default BreedInfo;
