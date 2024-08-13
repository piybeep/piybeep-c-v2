
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderDataType } from '../../../../types';
import s from './Slider.module.scss'
import { Autoplay } from 'swiper/modules';
import classNames from 'classnames';
import { useWindowSizes } from '../../../../hooks';

export function Slider({ data }: { data: SliderDataType[] }) {
    if (!data) {
        return <></>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { width } = useWindowSizes()

    console.log(width)

    return (
        <div className={s.wrapper}>
            <h2 className={s.wrapper__title}>Они оптимизируют работу компании во многих сферах...</h2>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: false,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
                spaceBetween={width >= 320 && width <= 430 ? 30 : width > 430 && width <= 1024 ? 40 : 60}
                slidesPerView={6}
                modules={[Autoplay]}
                allowTouchMove={false}
                loop={true}
                className={s.wrapper__slider}
            >
                {
                    data.map(i => <SwiperSlide key={i.id} className={s.wrapper__slide}>
                        {({ isActive }) => (
                            <p className={classNames(s.wrapper__text, {
                                [s.wrapper__text_active]: isActive
                            })}>{i.name}</p>
                        )}
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
}
