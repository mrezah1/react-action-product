import { useMemo } from 'react'
import useFetch from './useFetch'

const useProducts = (query = '', isEnabled = true) => {
  let { data, error, loading } = useFetch('/products.json' + query, isEnabled)
  return useMemo(() => {
    if (data) {
      const toArr = Object.keys(data)
      data = toArr.map((item) => ({
        id: item,
        ...data[item]
      }))
    }
    return { data, error, loading }
  }, [data, error, loading])
}
export default useProducts
