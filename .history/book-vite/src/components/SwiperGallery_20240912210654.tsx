import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination,Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperGallery = () => {
    return (
        <>
            <Swiper className="cursor-pointer mb-[50px]"
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                slidesPerView={1} //so luong hinh tren 1 view
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img width={2050} height={1366} src="https://codedeco.art/wp-content/uploads/2024/04/1-2048x1366.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img width={2050} height={1366}  src="https://codedeco.art/wp-content/uploads/2024/04/xs-2048x1366.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img width={2050} height={1366}  src="https://codedeco.art/wp-content/uploads/2023/10/a1.jpg"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperGallery;