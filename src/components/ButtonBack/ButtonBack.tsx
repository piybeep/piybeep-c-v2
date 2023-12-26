import { useRouter } from 'next/router';
import s from './ButtonBack.module.scss'

export function ButtonBack() {
    const router = useRouter()
    return (
        <button onClick={() => router.back()} className={s.button}>
            <svg className={s.button__svg} width="19" height="7" viewBox="0 0 19 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.2 0.5L1 3.5M1 3.5L4.2 6.5M1 3.5H18.5" stroke="#CACACA" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            назад
        </button>
    );
};