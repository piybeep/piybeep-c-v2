import axios from "axios"
import { useEffect, useState } from "react"
import { BlogsResTypes } from "../../src/types"

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
                    setData(
                        res.data.data.map((data: BlogsResTypes) => ({
                            id: data.id,
                            title: data.Title,
                            themes: data.themes.map(theme => theme.Theme),
                            previewImage: data.ImagePreview.url,
                            text: data.Text
                        }))
                    )
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