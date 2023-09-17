import { styled } from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
        color: #fff;
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
    background-color: #007aff;
   margin: 0 auto;
    width: 100%;
    max-width: 400px;

    a{
        color: #fff;
        text-decoration: none !important;
    }
`

export const Screen = styled(Flex)`
flex-direction: column;
width: calc(100% - 20px);
margin: auto auto;
padding-bottom: 100px;
`