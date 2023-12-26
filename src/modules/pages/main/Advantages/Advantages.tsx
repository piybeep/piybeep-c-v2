import Image from "next/image";

import { BlockLayout } from "../../../../layouts";
import { ADVANTAGES_LIST } from "../../../../constatnts";
import { Item } from "./components";

import s from "./Advantages.module.scss";

export function Advantages() {
    return (
        <BlockLayout
            value="Преимущества"
            subtitle="Это все уже включено в разработку"
        >
            <div className={s.list}>
                {ADVANTAGES_LIST.map((item, index) => (
                    <Item
                        key={index}
                        title={item.title}
                        text={item.text}
                        number={index + 1}
                        titleIcon={
                            <Image
                                src={`/svg/${item.titleIcon}`}
                                alt=""
                                width={22}
                                height={22}
                            />
                        }
                    />
                ))}
            </div>
        </BlockLayout>
    );
}
