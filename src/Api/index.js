const baseUrl = 'https://product-search-react-default-rtdb.firebaseio.com'
const config = (data) => ({
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
const instance_req = {
  get(query) {
    return fetch(baseUrl + query, config).then((response) => response.json())
  },
  post(query, body) {
    return fetch(baseUrl + query, config(body))
  }
}
export default instance_req
