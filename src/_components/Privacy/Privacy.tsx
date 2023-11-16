import Link from 'next/link';

import s from './Privacy.module.scss'

import { PrivacyProps } from './Privacy.types';
import { PRIVACY_LINK } from '../../constatnts';
import classNames from 'classnames';

export function Privacy({ size = 'md' }: PrivacyProps) {
	return (
		<h2 className={classNames(s.text, s[`text__${size}`])}>
			{`Нажимая "Отправить", вы принимаете политику хранения и обработки `}
			<Link
				href={PRIVACY_LINK}
				target={"_blank"}
				className={s.text__link}
			>
				персональных данных
			</Link>
		</h2>
	);
};