import axios from "axios"
import { useEffect, useState } from "react"
import { BlogsResTypes } from "../../types"

export const useFetchBlogs = (query: string) => {
    const [data, setData] = useState<BlogsResTypes[]>([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [totalPageCount, setTotalPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setLoading(true)

        axios.get(`/api/blogs?populate=*&${query}`)
            .then(res => {
                setData(res.data.data)
                setTotalPageCount(res.data.meta.pagination.pageCount)
                setCurrentPage(res.data.meta.pagination.page)

            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))

    }, [query])

    return {
        data,
        isLoading,
        error,
        totalPageCount,
        currentPage
    }
}