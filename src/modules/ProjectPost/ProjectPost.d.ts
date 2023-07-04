export interface Project {
	id: string;
	title: string;
	customer: string;
	access?: string;
	link?: string;
	task?: string;
	about_company?: string;
	about_service?: string;
	text: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface ProjectPostProps {
	project: Project;
}
