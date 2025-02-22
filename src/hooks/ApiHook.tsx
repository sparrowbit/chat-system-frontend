import React, { useEffect } from 'react'

const ApiHook = ({body}: {body: any}) => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        setLoading(true)
        const baseURL = import.meta.env.VITE_BASE_API_URL;

        ;(async () => {

        })()

        setLoading(false)
    }, [])

  return { data, loading }
}

export default ApiHook