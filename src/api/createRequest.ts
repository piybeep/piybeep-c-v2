import axios from "axios";
import { Service } from "../utils";
import { toNamespacedPath } from "path/posix";

interface RequestPayload {
	name: string;
	contact: string;
	selects: string[];
	servicesList: Service[]
}

export default function CreateRequest({
	contact,
	selects,
	name,
	servicesList
}: RequestPayload) {
	return axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/requests`, {
		data: {
			client_name: name,
			contact,
			services: servicesList.filter(service => selects.includes(service.name)).map(i => i.id),
		}
	}, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
		}
	})
	.then(() => axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/telegram-bot-strapi/send-message`, {
		message: `Новая заявка

Имя: ${name}
Связь: ${contact}
Выбор:
${selects.map(i => `- ${i}`).join('\n')}
`
	}).catch(err => console.log(err)))
	.catch(error => console.error(error?.message ?? error));
}
