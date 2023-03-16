import Image from "next/image";
import s from "./RojectsPreview.module.scss";

export function RojectsPreview() {
	const titles = [
		{ text: "Сайты", prive: "> 29 900 руб." },
		{ text: "Поддержка", prive: "> 7 400 руб./мес" },
	];
	const images = [
		{ id: "1", src: "/imgs/preview-template.png" },
		{ id: "2", src: "/imgs/2-preview-template.png" },
		{ id: "3", src: "/imgs/preview-template.png" },
		{ id: "4", src: "/imgs/preview-template.png" },
		{ id: "5", src: "/imgs/2-preview-template.png" },
		{ id: "6", src: "/imgs/preview-template.png" },
		{ id: "7", src: "/imgs/preview-template.png" },
		{ id: "9", src: "/imgs/2-preview-template.png" },
		{ id: "8", src: "/imgs/preview-template.png" },
		{ id: "10", src: "/imgs/preview-template.png" },
		{ id: "11", src: "/imgs/2-preview-template.png" },
		{ id: "12", src: "/imgs/preview-template.png" },
	];

	return (
		<div className={s.wrapper}>
			<div className={s.titles}>
				{titles.map((i) => (
					<div key={i.text} className={s.title}>
						<h2 className={s.text}>{i.text}</h2>
						<h2 className={s.price}>{i.prive}</h2>
					</div>
				))}
			</div>
			<div className={s.info}>
				<div className={s.preview}>
					{images.map((i) => (
						<div key={i.id} className={s.container}>
							<Image src={i.src} alt="" width={270} height={152} />
						</div>
					))}
				</div>
				<p className={s.text}>
					Каждый проект мы разрабатываем с нуля и полностью полагаемся на наших
					специалистов, которые придут к результату, который нужен именно вам.
					Ведь самое главное - это получить продукт, который решает ваши задачи
					и приносит прибыль.
				</p>
			</div>
		</div>
	);
}
