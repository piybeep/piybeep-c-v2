import s from "./Technologies.module.scss";
import { Item } from "./components";
import { TECHNOLOGIES_LIST } from "../../constatnts";
import { Title } from "../../components";
import classNames from "classnames";
import { useWindowSizes } from "../../hooks";

export function Technologies() {

	const { width } = useWindowSizes()

	return (
		<div className={s.wrapper} id={"stacks"}>
			<Title value={"Стек технологий"} size="md" />

			<div className={s.list}>
				{
					width > 1130
						? <>
							<div className={classNames(s.list__content, s.list__content_top)}>
								{
									TECHNOLOGIES_LIST.slice(0, 6).map(item => (
										<Item key={item.title} icon={item.icon} title={item.title} />
									))
								}
							</div>
							<div className={classNames(s.list__content, s.list__content_bottom)}>
								{
									TECHNOLOGIES_LIST.slice(6, TECHNOLOGIES_LIST.length).map(item => (
										<Item key={item.title} icon={item.icon} title={item.title} />
									))
								}
							</div>
						</>
						: <>
							{
								TECHNOLOGIES_LIST.map(item => (
									<Item key={item.title} icon={item.icon} title={item.title} />
								))
							}
						</>
				}

			</div>
		</div>
	);
}
