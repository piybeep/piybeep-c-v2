
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderDataType } from '../../../../types';
import s from './Slider.module.scss'
import { Autoplay } from 'swiper/modules';
import classNames from 'classnames';
import { useWindowSizes } from '../../../../hooks';
import { Text } from '../Text';

export function Slider({ data }: { data: SliderDataType[] }) {
    if (!data) {
        return <></>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { width } = useWindowSizes()

    return (
        <div className={s.wrapper}>
            <Text />
            <div className={s.wrapper__content}>
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
                    spaceBetween={width > 1024 && width <= 1920 ? 60 : width <= 1024 && width > 430 ? 40 : 30}
                    slidesPerView={'auto'}
                    autoHeight
                    modules={[Autoplay]}
                    allowTouchMove={false}
                    loop={true}
                    className={s.wrapper__slider}
                >
                    {
                        data.concat(data).map((i, index) => <SwiperSlide key={index} className={s.wrapper__slide}>
                            {({ isActive }) => (
                                <p className={classNames(s.wrapper__text, {
                                    [s.wrapper__text_active]: isActive
                                })}>{i.name}</p>
                            )}
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
}
