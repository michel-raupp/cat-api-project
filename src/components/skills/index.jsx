/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { Flex } from "../../styles/styles";


export const SkillBarWrapper = styled(Flex)`
margin-top: 40px;
    gap: 10px;
    flex-direction: column;
`

const StyledSkillBar = styled(Flex)`
justify-content: space-between;
width: 100%;
    max-width: 400px;
.bar-container{
    height: 8px;
    border-radius: 8px;
    width: 100%;
    max-width: 230px;
    background-color: #010002;
}
.bar{
    height: 8px;
    border-radius: 8px;
    max-width: 400px;
    background-color: #ff009d;
}
`

function SkillBar({ label, value }) {
    // Calcula a largura da barra com base no valor (0 a 5)
    const width = (value / 5) * 100 + '%';

    return (
        <StyledSkillBar>
            <div className="skill-label">{label}</div>
            <div className="bar-container">
                <div className="bar" style={{ width: width }}></div>
            </div>
        </StyledSkillBar>
    );
}

export default SkillBar;