import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchBlogs = (query: string) => {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(true)

            axios.get(`/api/blogs?populate=*&${query}`)
                .then(res => {
                    setData(res.data.data)
                    setTotalCount(res.data.meta.pagination.total)
                })
                .catch(error => setError(error))
                .finally(() => setLoading(false))

        }, 750);

        return () => clearTimeout(timeout)

    }, [query])

    return {
        data,
        isLoading,
        error,
        totalCount,
    }
}