import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const themesRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/themes?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })

    res.status(200).json(themesRes.data.data)
}