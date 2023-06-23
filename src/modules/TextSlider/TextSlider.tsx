import {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import {useWindowSizes} from "../../hooks";

import s from "./TextSlider.module.scss";
import {TextSliderTypes} from "./TextSlider.types";

export function TextSlider({slogans}: TextSliderTypes) {
    const {width} = useWindowSizes();
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Создаем сайты, которые</div>
            <Swiper
                className={s.slider}
                modules={[Autoplay]}
                direction={width >= 1024 ? "vertical" : "horizontal"}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                speed={500}
                loop
                allowTouchMove={false}
                autoHeight
            >
                {slogans.map((i) => (
                    <SwiperSlide key={i} className={s.slide}>
                        <p className={s.text}>{i}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
