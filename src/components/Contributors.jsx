import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Styles must use direct files imports
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
// import 'swiper/exports/scss/pagination.scss'; // Pagination module
import { Box, Image, Text } from "@chakra-ui/react";
import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_3 from "../assets/img_3.jpg";

const Contributors = () => {
    return (
        <Box>
            <Text
                color={"#000000"}
                fontSize={"34px"}
                fontStyle={"normal"}
                fontWeight={"500"}
            >
                View Our Contributors
            </Text>
            <Box >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    //   onSwiper={(swiper) => console.log(swiper)}
                    //   onSlideChange={() => console.log('slide change')}
                    autoplay={{ delay: 1000 }}
                >
                    <SwiperSlide >
                        <Image src={img_1} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Image src={img_2} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Image src={img_3} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Image src={img_1} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Image src={img_3} />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
};

export default Contributors;