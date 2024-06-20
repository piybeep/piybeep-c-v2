import { StaticImageData } from "next/image";

interface BaseEntity {
	id: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Service extends BaseEntity {
	name: string;
	description: string;
	price: number;
	discount: number;
	isHide: boolean;
	isAvailable: boolean;
	type: string;
}

export interface Project extends BaseEntity {
	title: string;
	subtitle: string;
	preview_image: string;
	customer: string;
	access: string;
	link: string;
	task: string;
	about_company: string;
	about_service: string;
	text: string;
	review: Review | null;
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
	id: string;
	name: string;
	description: string;
	price: number;
	discount: number | null;
	isAvailable: boolean;
	type: string;
}