import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Styles must use direct files imports
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
// import 'swiper/exports/scss/pagination.scss'; // Pagination module
import { Box, Image, Text } from "@chakra-ui/react";
import img_1 from "../assets/img_4.jpeg";
import img_2 from "../assets/img_5.jpg";
import img_3 from "../assets/img_6.jpg";
import img_4 from "../assets/img_7.jpg";

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
            <Box mt={4}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    //   onSwiper={(swiper) => console.log(swiper)}
                    //   onSlideChange={() => console.log('slide change')}
                    autoplay={{ delay: 1000 }}
                >
                    <SwiperSlide >
                        <Image width={'3xl'} src={img_1} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Image width={'3xl'} src={img_2} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Image width={'3xl'} src={img_3} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Image width={'3xl'} src={img_4} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Image width={'3xl'} src={img_3} />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
};

export default Contributors;