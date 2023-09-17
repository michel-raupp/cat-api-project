
import { styled } from "styled-components"

export const StyledHamburguer = styled.div`
  padding: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007aff;
  



/* <style for menu__icon> ======== */
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
  background-color: #fff;
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
        <StyledHamburguer>
            <button className="menu__icon">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </StyledHamburguer>
    )
}

export default Hamburguer;