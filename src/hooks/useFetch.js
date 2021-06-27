import { useEffect, useState } from 'react'
import Api from 'Api'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    Api.get(url)
      .then((response) => {
        setData(response)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])
  return { data, error, loading }
}
export default useFetch
