import axios from "axios";

interface RequestPayload {
	name: string;
	contact: string;
	selects: string[];
}

export default function CreateRequest({
	contact,
	selects,
	name,
}: RequestPayload) {
	return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/requests`, {
		name,
		contact,
		services: selects,
	});
}
