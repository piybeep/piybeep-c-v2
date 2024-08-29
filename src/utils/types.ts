import { StaticImageData } from "next/image";

interface BaseEntity {
	id: string | number;
	createdAt: Date;
	updatedAt: Date;
}

export interface Service extends BaseEntity {
	name: string;
	title:string
	description: string;
	description_2:string
	count_days:string
	meta_title:string
	meta_description:string
	price: number;
	slug: string;
	discount: number | null;
	isHide: boolean;
	isAvailable: boolean;
	type: string;
}

export interface Project extends BaseEntity {
	title: string;
	subtitle: string;
	preview_image: { url: string };
	customer: string;
	access: string;
	link: string;
	task: string;
	about_company: string;
	about_service: string;
	text: string;
	review: Review | null;
	meta_title: string
	meta_description: string
	slug: string
}

export interface Review extends BaseEntity {
	author: string;
	text: string;
	project: Project | null;
}

export interface EntityState<T> {
	list: T[];
	total_count: number;
	error: Error | null;
}

export interface EntityActions<T> {
	setList: (list: T[], total_count: number) => void;
	setError: (error: Error | null) => void;
}

export interface ProductType {
	id: number | string
	name: string;
	slug: string;
	price: number;
	discount: number | null;
	isAvailable: boolean;
	type: string;

	title: string
	description:string
	description_2:string
	count_days:string
	meta_title:string
	meta_description:string

	createdAt: Date;
	updatedAt: Date;
}
