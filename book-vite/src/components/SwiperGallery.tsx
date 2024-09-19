import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GrPrevious,GrNext } from "react-icons/gr";
const SwiperGallery = () => {
    return (
        <>
            <div className="swiper-button-prev-custom"><GrPrevious className="text-[19px]"/></div>
            <div className="swiper-button-next-custom"><GrNext className="text-[19px]"/></div>

            <Swiper
                className="cursor-pointer mb-[50px]"
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-pagination-bullet">—</span>`;
                    }
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                slidesPerView={2}
            >
                <SwiperSlide>
                    <img width={550} height={400} src="https://salt.tikicdn.com/cache/w700/ts/tmp/d8/65/e1/040fd0e0d4cd499bc10bf7f14411de5e.jpg.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img width={550} height={400} src="https://salt.tikicdn.com/cache/w700/ts/tmp/61/3f/42/a70a81c7ec2e2196d1b6877dab7601e1.jpg.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img width={550} height={500} src="https://ebdbook.vn/upload/banner/banner2/banner-sach-04.jpg?v=1.0.1" className="h-[273px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img width={550} height={400} src="https://ebdbook.vn/upload/sgk/ta5912/banner-bh-stem-1450x500-px-01-copy.jpg?v=1.0.1" className="h-[273px]"  />
                </SwiperSlide>
                <SwiperSlide>
                    <img width={550} height={400} src="https://ebdbook.vn/upload/stk/giao-duc-stem-steam-tu-trai-nghiem-thuc-hanh-den-tu-duy-sang-tao/banner/kenh-ban-si-va-le-1450.jpg?v=1.0.1" className="h-[273px]"  />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperGallery;
