import s from './RichTextEditor.module.scss'

export function RichTextEditor({ html }: { html: string }) {
    console.log(html)
    return (
        <div className={s.richTextEditor} dangerouslySetInnerHTML={{ __html: html }} />
    );
};