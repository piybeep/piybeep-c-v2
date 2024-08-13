import { TitleProps } from './Title.types';

import s from './Title.module.scss'
import Link from 'next/link';

export function Title({ text, price, isLink }: TitleProps) {
    return (
        <div className={s.title}>
            {
                isLink
                    ? <Link className={s.title__text} href='/services'>
                        {text}
                        <svg className={s.title__svg} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="1" width="17" height="17" rx="8.5" stroke="#8E8E8E" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.26656 12.2333C6.0713 12.038 6.0713 11.7214 6.26656 11.5262L10.1726 7.62012L6.62012 7.62012C6.34397 7.62012 6.12012 7.39626 6.12012 7.12012C6.12012 6.84398 6.34397 6.62012 6.62012 6.62012L11.3797 6.62012C11.5123 6.62012 11.6395 6.6728 11.7333 6.76656C11.8271 6.86033 11.8797 6.98751 11.8797 7.12012L11.8797 11.8797C11.8797 12.1559 11.6559 12.3797 11.3797 12.3797C11.1036 12.3797 10.8797 12.1559 10.8797 11.8797L10.8797 8.32722L6.97367 12.2333C6.77841 12.4285 6.46183 12.4285 6.26656 12.2333Z" fill="#8E8E8E" />
                        </svg>
                    </Link>
                    : <p className={s.title__text}>{text}</p>
            }
            <p className={s.title__text}>{price}</p>
        </div>
    );
};
