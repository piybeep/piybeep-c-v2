import { Footer, Header } from '../../modules'
import { ContactsType } from '../../types';
import s from './DefaultLayout.module.scss'

export function DefalutLayout({ children, contacts }: { children: React.ReactNode, contacts: ContactsType[] }) {
    return (
        <div className={s.wrapper}>
            <Header contacts={contacts} />
            <div className={s.wrapper__content}>
                {children}
            </div>
            <Footer contacts={contacts} />
        </div>
    );
};
