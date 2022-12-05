import { useNavigate } from "react-router-dom"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

import "swiper/css"
import "swiper/css/navigation"

import { CarouselContainer } from "./styles"
import { CardDishes } from "../CardDishes"

export function Carousel() {

  const navigate = useNavigate()

  function handleDetails() {
    navigate('/details/1')
  }

  return (
    <CarouselContainer>
            <Swiper
        slidesPerView={"auto"}
        spaceBetween={32}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardDishes onClick={handleDetails} />
        </SwiperSlide>
        <SwiperSlide>
          <CardDishes onClick={handleDetails} />
        </SwiperSlide>
        <SwiperSlide>
          <CardDishes onClick={handleDetails} />
        </SwiperSlide>
        <SwiperSlide>
          <CardDishes onClick={handleDetails} />
        </SwiperSlide>

      </Swiper>
    </CarouselContainer>
  )
}