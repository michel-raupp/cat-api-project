
import { styled } from "styled-components"
import Logout from "../buttons/logout";
import logo from "../../assets/icons/cat-icon.svg"
import { Colors } from "../../styles/styles";
export const StyledHeader = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;

  background-color: ${Colors.primary};
 
.header-wrapper{
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.logo-wrapper{
  display: flex;
  gap: 16px;
  align-items: center;

  h1{
    font-size: 16;
  }
}

.menu__icon {
  width: 28px;
  height: 28px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.menu__icon span {
  width: 100%;
  height: 0.125rem;
  border-radius: 0.125rem;
  background-color: ${Colors.white};
  transition: transform .4s, background-color .4s, width .4s, opacity .4s;
}

.menu__icon span:nth-child(2) {
  width: 60%;
}

.menu__icon:hover span:nth-child(1) {
  background-color: rgb(255, 59, 48);
  transform: translateY(7.5px) rotate(-45deg);
}

.menu__icon:hover span:nth-child(2) {
  width: 0;
  opacity: 0;
}

.menu__icon:hover span:nth-child(3) {
  background-color: rgb(255, 59, 48);
  transform: translateY(-7.5px) rotate(45deg);
}
`

function Hamburguer() {
  return (
    <StyledHeader>
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt="cat-logo" />
          <h1>The Cat Facts</h1>
        </div>
        {/* <button className="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </button> */}

      
      <Logout />
      </div>
    </StyledHeader>
  )
}

export default Hamburguer;