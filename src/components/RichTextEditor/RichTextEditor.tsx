import { useEffect } from 'react';
import s from './RichTextEditor.module.scss'

export function RichTextEditor({ html }: { html: string }) {
    useEffect(() => {
        const block = document.getElementById('richTextEditor')

        block?.children[0].tagName.toLowerCase() === 'p' && block.children[0].classList.add(s.richTextEditor__first)
    }, [])
    return (
        <div className={s.richTextEditor} id='richTextEditor' dangerouslySetInnerHTML={{ __html: html }} />
    );
};
