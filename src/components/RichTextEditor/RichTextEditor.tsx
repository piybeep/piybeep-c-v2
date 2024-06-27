import s from './RichTextEditor.module.scss'

export function RichTextEditor({ html }: { html: string }) {
    return (
        <div className={s.richTextEditor} dangerouslySetInnerHTML={{ __html: html }} />
    );
};