import { useMemo } from 'react'
import useFetch from './useFetch'

const useProducts = () => {
  let { data, error, loading } = useFetch('/products.json')
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
