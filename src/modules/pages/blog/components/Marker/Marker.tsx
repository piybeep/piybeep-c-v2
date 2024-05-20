import s from './Marker.module.scss'

export function Marker({ text }: { text: string }) {
    return (
        <p className={s.marker}>
            {text}
        </p>
    );
};