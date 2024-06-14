import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function GetBlogs(req: NextApiRequest, res: NextApiResponse) {
    const blockSelectQueryString = new URLSearchParams(req.query as Record<string, string>)

    const blogRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?${blockSelectQueryString.toString()}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })

    res.status(200).json({ data: blogRes.data.data, meta: blogRes.data.meta })
}