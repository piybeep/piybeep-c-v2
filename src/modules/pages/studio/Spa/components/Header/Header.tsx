import s from './Header.module.scss'

export function Header({ title, text }: { title: string, text: string }) {
    return (
        <h2 className={s.header}>
            {title}{" "}
            <a
                className={s.header__link}
                target="_blank"
                rel="noreferrer"
                href="https://ru.wikipedia.org/wiki/Одностраничное_приложение"
            >
                {text}
            </a>
        </h2>
    );
};