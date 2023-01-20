import styled from "styled-components"

export const CarouselContainer = styled.div`
  width: 100%;
  height: 32rem;
  overflow-y: hidden;
  padding: 0 1rem;

  .swiper {
    width: 100%;
    height: 100%;
    margin-top: 2.4688rem;
  }

  .swiper-slide {
    width: fit-content;
    text-align: center;
    font-size: 18px;
    background: none;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  };

  .swiper-button-prev {
    width: 7.25rem;
    height: 100%;
    background: linear-gradient(
      90deg, 
      ${({ theme }) => theme.background} 0%,
      rgba(0, 10, 15, 0.272541) 100%
      )
    ;

    left: 0;
    top: 1.375rem;

    justify-content: flex-start;
    padding-left: 0.5rem;

    color: ${({ theme }) => theme.white};
  };

  .swiper-button-next {
    width: 7.25rem;
    height: 100%;
    background: linear-gradient(
      90deg, 
      rgba(0, 10, 15, 0.272541) 0%, 
      ${({ theme }) => theme.background} 100%
      )
    ;

    right: 0;
    top: 1.375rem;

    justify-content: flex-end;
    padding-right: 0.5rem;

    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 500px) {
    height: 27rem;

    .swiper {
      margin-top: 0;
    }
  }
`