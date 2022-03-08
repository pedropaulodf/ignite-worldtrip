import { Flex } from "@chakra-ui/react";
import { HomeSliderSlide } from "./HomeSliderSlide";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper";

interface HomeSliderProps {
  sliders: Slider[];
}

interface Slider {
  title: string;
  subtitle: string;
  urlImage: string;
  slug: string;
}

export default function HomeSlider({ sliders }: HomeSliderProps) {
  return (
    <Flex
      w="100%"
      h={["300px", "350px", "450px"]}
      maxWidth={1240}
      mx="auto"
      px={["0", "0", "6"]}
      my="12"
      justifyContent="center"
      alignContent="center"
      position="relative"
    >
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index} className="with-gradient">
            <HomeSliderSlide
              title={slide.title}
              subtitle={slide.subtitle}
              imageUrlName={slide.urlImage}
              slug={slide.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
