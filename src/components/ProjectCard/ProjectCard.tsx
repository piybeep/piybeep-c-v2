import Image from "next/image";
import s from "./ProjectCard.module.scss";
import classNames from "classnames";
import Link from "next/link";

export function ProjectCard({ ...props }: /*ProjectCardProps*/ any) {
	return (
		<Link
			className={classNames(props?.className, s.project_card)}
			href={`/portfolio/${props.id}`}
		>
			<div className={s.image}>
				<Image
					src={props.preview_image /*"/imgs/project-template.png"*/}
					alt=""
					width={520}
					height={390}
				/>
			</div>
			<h3 className={s.title}>{props.title}</h3>
			<p className={s.description}>{props.subtitle}</p>
		</Link>
	);
}
