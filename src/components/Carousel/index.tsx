import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css/navigation"
import "swiper/css"

import { CarouselContainer } from "./styles"
import { CardDishes } from "../CardDishes"
import { IProducts } from "../../pages/Home"

interface CarouselProps {
  products: IProducts[]
}

export function Carousel({ products }: CarouselProps) {

  return (
    <CarouselContainer>
            <Swiper
        slidesPerView={"auto"}
        spaceBetween={32}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          products &&
          products.map(product => (
            <SwiperSlide key={product.id}>
              <CardDishes product={product} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </CarouselContainer>
  )
}