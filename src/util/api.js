import ajax from './ajax.js'

function getAllBlog(data, callback) {
	ajax.post('/blog/getAllFront', data, callback)
}

export default {
	getAllBlog: getAllBlog(data, callback)
}