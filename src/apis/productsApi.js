import axios from 'axios'

const CORSMiddleware = 'https://cors-anywhere.herokuapp.com'

export default axios.create({
	baseURL: `${CORSMiddleware}/https://rayk6r3m9j.execute-api.us-west-2.amazonaws.com/default`
})
