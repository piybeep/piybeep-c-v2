import s from './ErrorText.module.scss'

export function ErrorText({ value }: { value: string }) {
    return (
        <div className={s.error}>
            {value}
        </div>
    );
};