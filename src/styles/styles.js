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
    }


`

export const SliderContainer = styled.div`

/* position: relative;
    top: -20px; */
   
    .cat-image {
        width: 100%;
        height: 100%;
        max-height: 400px;
        object-fit: cover !important;
        display: flex !important;
        justify-content: center;
}

.slider-image-container{
    max-width: 400px;
    display: flex;
    align-items: flex-end;
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
}
  `
