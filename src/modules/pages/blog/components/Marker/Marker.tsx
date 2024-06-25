import s from './Marker.module.scss'

export function Marker({ text, borderColor }: { text: string, borderColor?: string }) {
    return (
        <p className={s.marker} style={{ borderColor }}>
            {text}
        </p>
    );
};