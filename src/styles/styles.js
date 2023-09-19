import { css, styled } from "styled-components";
import background from "../assets/background.png"


export const Colors = {

    primary: '#163FCF',
    green: '#13B366',
    black: '#171616',
    white: '#fff',
    grey: '#2C2E34',

}


export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    
    ${props =>
        props.isCollum &&
        css`
    width: 100%;
    flex-direction: column;
    `};
`
export const Hero = styled(Flex)`
margin-top: 10px;
    flex-direction: column;
    gap: 10px;

    .dropdown-wrapper{
        /* position: relative;
        top: 30px; */
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 400px;
        padding: 0 10px;
        z-index: 3;

        position: absolute;
        top: 60px;
    }

    .dropdown{
        color:  ${Colors.white};
        border: 1px solid #7D7D7D;
        background: #12121278;
    border-radius: 4px;
    padding: 4px;
    backdrop-filter: blur(3px);

    }


`

export const SliderContainer = styled.div`

/* position: relative;
    top: -20px; */
   
    .cat-image {
        /*width: 100%; */
    /* height: 100%; */
    max-height: 400px;
    object-fit: contain;
    display: flex!important;
    justify-content: center;
}


.slider-container {
    margin-top: -51px;
}
.slider-image-container{
    max-width: 400px;
    display: flex;
    align-items: flex-end;
}
.slick-initialized:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg, #171616 0%, rgba(23, 22, 22, 0.21) 27.33%), linear-gradient(180deg, rgba(23, 22, 22, 0.00) 73.41%, #171616 97.27%);
}
.slick-slider{
    display: flex;
    justify-content: center;
}

.slick-list{
    width: 400px !important;
    overflow: hidden; 
}

.slick-next{
    right: 25px;
    z-index: 2;
}

.slick-prev{
    left: 25px;
    z-index: 2;
}

.slick-dots{
    bottom: 20px;
    z-index: 1;
}
  `
export const Button = styled(Flex)`
  font-size: 14px;
font-weight: 400;
    padding: 8px 16px;
    border-radius: 50px;
    cursor: pointer;
    background-color:  ${Colors.primary};
   margin: 0 auto;
    width: 100%;
    max-width: 400px;

    a{
        color:  ${Colors.white};
        text-decoration: none !important;
    }

    ${props =>
        props.isLogout &&
        css`
    width: min-content ;
    margin: unset ;

      background-color:  ${Colors.grey};;
    `};

    ${props =>
        props.isLogin &&
        css`
        margin-top: 12px;
    max-width: 220px;
    `};

   

`

export const Screen = styled(Flex)`
flex-direction: column;
width: calc(100% - 20px);
margin: auto auto;
padding-bottom: 100px;
`

export const StyledHome = styled(Flex)`
    flex-direction: column;

.slick-dots li button:before{
	opacity: 1;
	color: #4b4848;
	font-size: 10px;
}
.slick-dots li.slick-active button:before{
	color:  ${Colors.white};
	font-family: 'slick';
    font-size: 10px;
	opacity: 1;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    border-radius: 50%;
    background:  ${Colors.white};
    color: #222;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 19px;
    width: 20px;
    display: flex;
}
button{
	
	color:  ${Colors.white};
}
`

export const StyledLogin = styled(StyledHome)`
    height: 68vh;
.bg{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
}
   .bg::before{
content: "";
    width: 400px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 400px;
    background-position: center;
    height: 711px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    margin: auto;
    z-index: -1;
    }
    img{
        width: 145px;
    }
    h2{
        font-size: 40px;
    }
    p{
        font-size: 12px;
        font-weight: 200;
        margin-bottom: 40px;
    }
`