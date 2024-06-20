import { Footer, Header } from '../../modules'
import s from './DefaultLayout.module.scss'

export function DefalutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={s.wrapper}>
            <Header />
            <div className={s.wrapper__content}>
                {children}
            </div>
            <Footer />
        </div>
    );
};