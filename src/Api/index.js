const baseUrl = 'https://product-search-react-default-rtdb.firebaseio.com'

const config = {
  post: (data) => ({
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }),
  delete: {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json'
    }
  }
}
const instance_req = {
  get(query) {
    return fetch(baseUrl + query, config).then((response) => response.json())
  },
  post(query, body) {
    return fetch(baseUrl + query, config.post(body))
  },
  delete(query) {
    return fetch(baseUrl + query, config.delete)
  }
}
export default instance_req
